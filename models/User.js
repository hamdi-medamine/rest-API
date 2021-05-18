const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        },
    age: { 
        type: Number, 
        required: true, 
        },
    mobilephone: { 
        type: Number, 
         },
    email : {
        type: String ,
    }     
  })

  module.exports = mongoose.model("user", userSchema);