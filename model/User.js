const mongoose=require("mongoose")
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    phone:{
        type:Number,
        required:true,
        minlength:10
    },
    age:{
        type:Number,
        required:true,
        min:8
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        // lowercase:true
    }
})
let userModel = mongoose.model("User",userschema)

module.exports=userModel