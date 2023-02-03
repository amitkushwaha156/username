const todoModel = require("../models/todoModel");
const app = require("express").Router();

// app.get("/todo",(req,res)=>{
//     res.send("yoyo")
// })
app.get("/todo", async (req, res) => {
  try {
    const todoModels = await todoModel.find();
    res.send(todoModels);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete("/:id", async(req,res)=>{
  try {
    const delModels = await todoModel.findOneAndDelete();
    res.send(delModels);
  } catch (e) {
    res.status(400).send(e);
  }
})

app.put("/:id", async (req, res) => {
  const { name, email, address, city, gender, mobile } = req.body;
  const data = await todoModel.findOneAndUpdate({
    name,
    email,
    address,
    city,
    gender,
    mobile,
  });
  //console.log(data)
  res.send({ message: "data update" });
});

app.post("/", async (req, res) => {
  const { name, email, address, city, gender, mobile } = req.body;
  const data = await todoModel.create({
    name,
    email,
    address,
    city,
    gender,
    mobile,
  });
  //console.log(data)
  res.send({ message: "data added" });
});

module.exports = app;
