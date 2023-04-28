const mongoose = require("mongoose");

function connect(){
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected To mongoDb")
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = connect;
