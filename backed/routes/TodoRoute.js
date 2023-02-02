const todoModel= require("../models/todoModel")
const app= require("express").Router()


app.get("/",(req,res)=>{
    res.send("yoyo")
})
app.post("/",async(req,res)=>{
   const {name,email,address,city,gender,mobile}= req.body
   const data= await todoModel.create({name,email,address,city,gender,mobile})
   res.send({message:"data added"})
})


module.exports= app

