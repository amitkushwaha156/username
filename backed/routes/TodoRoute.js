const todoModel= require("../models/todoModel")
const app= require("express").Router()


app.get("/",(req,res)=>{
    res.send("yoyo")
})


module.exports= app

