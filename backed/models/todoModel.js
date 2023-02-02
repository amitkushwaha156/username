const mongoose = require('mongoose')


const todoSchema= mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    gender:{type:String,required:true,enum:["male","female"]},
    mobile:{type:Number,required:true},
})


const todoModel  = mongoose.model('todo',todoSchema)

module.exports = todoModel;