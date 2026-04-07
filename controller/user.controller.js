const User = require('../model/User')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const registeruser= async(req,res) =>{
    let datas= req.body
    try{
        const existuser= await User.findOne({
            email:datas.email,
            phone:datas.phone
        })
        if(existuser){
            return res.send({message:"User is already exist"})
        }
        let hashpassword = await bcrypt.hash(datas.password,10)
        datas.password =hashpassword
        let user_data = new User(datas)
        await user_data.save()
        res.send({message:"User registered successfully"})
    }catch(err){
        res.send(err)
    }
}

const getalluser = async(req,res)=>{

    try{

        let datas = await User.find().select("-password")
        res.send({
            message:"data fetched",
            data: datas
        })

    }catch(err){
        res.send(err)
    }
}

const edituser = async(req,res) =>{
    try{

        let id = req.query.id
        let datas = req.body
        console.log(datas);

        let users = await User.findById(id)

        if(!users){
           return res.send({"message":"user not found"})
        }

        users.name = datas.name,
        users.phone =datas.phone,
        users.age = datas.age,
        users.email=datas.email
        
        let hashpassword = await bcrypt.hash(datas.password,10)
        users.password = hashpassword

        await users.save()
        res.send({
            "message":"user updated",
            "data": users})
        
    }catch(err){
        res.send(err)
    }
}

const deleteuser = async(req,res) =>{
    try{

        let id = req.query.id

        let users = await User.findByIdAndDelete(id)

        res.send({message:"User deleted successfully"})
    }catch(err){
        res.send(err)
    }
}

const loginuser = async(req,res) =>{

    let {email,password} = req.body

    let user = await User.findOne({email})

    let checkpassword = await bcrypt.compare(password,user.password)

    if(!checkpassword){
        res.send({message:"Invalid credential"})
    }
    const token = jwt.sign({
        id:user.id,
        name:user.name
    },"9amnodejs",
{
    expiresIn:"1d"
}) 
    res.send({
        status:"success",
        message:"User logined successfully",
        token:token

    })
}

module.exports = {registeruser,getalluser,edituser,deleteuser,loginuser}