const express = require('express')
const app = express()
app.use(express.json())
const handleauth = require("./middleware/auth")

// let datas=[{id:1,name:"sharika"},
//     {id:2,name:"rajan"},
//     {id:3,name:"riya"},
//     {id:4,name:"kavi"}
// ]
// app.get("/get",(req,res)=>{
//     res.send(datas);
// })
// app.get("/get_by_id",(req,res)=>{
//     let ids = req.query.id
//     let finddata= datas.find((data)=>{
//         return data.id == ids
//     })
//     res.send(finddata)
// })
// app.get("/getdata",(req,res)=>{
//     res.send({"name":"sharika","age":21})
// })
// app.post("/savedata",(req,res)=>{
//     res.send("your data saved")
// })

// app.post("/save",(req,res)=>{
// datas.push(req.body)
//     res.send({"data":datas,message:"your data saved"})

// })

// app.delete("/deletedata",(req,res)=>{
//     console.log(req.query.id);
//     res.send({message:"data has been deleted successfully" })
// })
// app.use("/test",(req,res)=>{
//     res.send("<h1>Monkey Kavitha</h1>");
// })
// app.use("/sha",(req,res)=>{
//     res.send("<h1>sharika</h2>");
// })

// app.get("/data",
//     (req, res, next) => {
//         next()
//         console.log(1);

//     },
//     (req, res, next) => {
//         next()
//         console.log(2);
//     },
//     (req, res) => {
//         res.send("3")
//         console.log(3);
//     }
// )
// app.get("/getusers",(req,res)=>{
//     let uniq= req.query.id
//     if(uniq == 9626){
//         res.send("user get all worked")
//     }else{
//         res.send("user not authorized")
//     }
// })
// app.use((req,res)=>{
//      res.send("Hii Iam server 7777");
// })
app.use("/admin",handleauth)

app.get("/admin/getdata",(req,res)=>{
    res.send("user get all worked")
})

app.delete("/admin/deletedata",(req,res)=>{
    res.send("user get deleted")
})

app.listen(7777, () => {
    console.log("u r server started");
})