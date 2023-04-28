const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    distance:{
        type:String,
        require:true
    },
    photo:{
        type:[String]
    },
    title:{
        type:String
    },
    desc:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    room:{
        type:[String]
    },
    cheapestPrice:{
        type:Number,
        require:true
    },
    featured:{
        type:Boolean,
        default:false
    }
})

let hotel = mongoose.model('hotel',hotelSchema);
module.exports = hotel;