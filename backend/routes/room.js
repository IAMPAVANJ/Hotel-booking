const router = require("express").Router();

router.get("/rooms",(req,res)=>{
    res.send("This is rooms")
})

module.exports = router;