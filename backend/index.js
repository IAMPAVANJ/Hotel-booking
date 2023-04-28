const express = require("express");
const connect = require("./database/db");
const cookie = require("cookie-parser")
const auth = require("./routes/auth");
const user = require("./routes/user");
const hotel = require("./routes/hotel");
const room = require("./routes/room");
const dotenv = require("dotenv")
dotenv.config();
const app = express();
//body parser
app.use(cookie())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
connect();

//error handling
// app.use((err,req,res,next)=>{
//     const errStatus = err.status || 500
//     const errMessage = err.message || "Something went Wrong"
//     return res.status(errStatus).json({
//         success:false,
//         status:errStatus,
//         message:errMessage,
//         stack:err.stack
//     })
// })

app.use("/",auth)
app.use("/",user)
app.use("/",hotel)
app.use("/",room)



app.listen(8080,()=>{console.log('server is up at 8080')})