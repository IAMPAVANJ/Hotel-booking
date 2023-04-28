const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const register = async(req,res)=>{

    try{
        const user = await User.findOne({email:req.body.email})
    if(user){
        res.status(400).json({
            success:false,
            message:"user already register"
        })
    }else{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt)
        const user = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        await user.save();
        res.status(201).json({
            success:true,
            message:"User created",
            user
        })
    }
    }catch(err){
        res.status(400).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}

const login = async(req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user){
            res.status(400).json({
                success:false,
                message:"user Not registered"
            })
        }else{
            const password = bcrypt.compare(req.body.password,user.password)
            if(!password){
                res.status(400).json({
                    success:false,
                    message:"Invalid Password"
                })
            }else{
                const token =  jwt.sign({id:user._id,isAdmin:user.isAdmin},"secretKey",{expiresIn:60*60*1000})

                const {password,isAdmin,...otherDetails} = user._doc
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json({...otherDetails})
            }
    
        }
    }catch(err){
        res.status(400).json({
            success:false,
            stack:err.stack,
            message:err.message
        })
    }
}


module.exports = {register,login}