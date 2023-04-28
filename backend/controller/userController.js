const User = require("../models/userSchema");

const UpdateUser = async(req,res)=>{
    try{
        
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(201).json({
            success:true,
            message:"User updated successfully",
            updateUser
        })

    }catch(err){
        res.status(500).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}

const deleteUser = async(req,res)=>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"User removed successfully",
            deleteUser
        })
    }catch(err){
        res.status(400).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}

const getUsers = async(req,res)=>{
    try{
        const Users = await User.find()
        res.status(200).json({
            success:true,
            Users
        })
    }catch(err){
        res.status(400).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}

const getUser = async(req,res)=>{
    try{
        const User = await User.findById(req.params.id)
        res.status(200).json({
            success:true,
            User
        })
    }catch(err){
        res.status(400).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}


module.exports = {UpdateUser,deleteUser,getUsers,getUser}