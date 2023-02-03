const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name: { type: String},
  email: { type: String},
  address: { type: String },
  city: { type: String },
  gender: { type: String },
  mobile: { type: Number },
});

const todoModel = new mongoose.model("todo", todoSchema);

module.exports = todoModel;
