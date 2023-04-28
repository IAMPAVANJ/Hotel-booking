const router = require("express").Router();
const { UpdateUser, deleteUser, getUser, getUsers } = require("../controller/userController");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");

router.get("/authentication", verifyToken, (req, res,next) => {
    res.send("user Logged in")
})
router.get("/isUser/:id", verifyUser, (req, res,next) => {
    res.send("user is admin and can delete anything")
})
router.get("/isAdmin/:id", verifyAdmin, (req, res,next) => {
    res.send("user is admin and can delete anything")
})
//UPDATE
router.put("/updateUser/:id", UpdateUser)

//DELETE
router.delete("/deleteUser/:id", deleteUser)
//GETAll
router.get("/user", getUsers)
//GET By Id
router.get("/user/:id", getUser)
module.exports = router;