
const Hotel = require("../models/hotelSchema");
const createHotel = async(req,res)=>{
    const newHotel = new Hotel(req.body);
    try{
        
        const saveHotel = await newHotel.save();
        res.status(201).json({
            success:true,
            message:"Hotel Saved successfully",
            saveHotel
        })

    }catch(err){
        res.status(500).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}


const UpdateHotel = async(req,res)=>{
    try{
        
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(201).json({
            success:true,
            message:"Hotel updated successfully",
            updateHotel
        })

    }catch(err){
        res.status(500).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}

const deleteHotel = async(req,res)=>{
    try{
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"Hotel removed successfully",
            deleteHotel
        })
    }catch(err){
        res.status(400).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}

const getHotels = async(req,res)=>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json({
            success:true,
            hotels
        })
    }catch(err){
        res.status(400).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}

const getHotel = async(req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json({
            success:true,
            hotel
        })
    }catch(err){
        res.status(400).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}


module.exports = {createHotel,UpdateHotel,deleteHotel,getHotels,getHotel}