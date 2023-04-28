const router = require("express").Router();
const { createHotel, UpdateHotel, deleteHotel, getHotel, getHotels } = require("../controller/hotelController");


//CREATE
router.post("/addHotel",createHotel)

//UPDATE
router.put("/updateHotel/:id",UpdateHotel)

//DELETE
router.delete("/deleteHotel/:id",deleteHotel)
//GETAll
router.get("/",getHotels)
//GET By Id
router.get("/:id",getHotel)
module.exports = router;