const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
const userModel = require("./models/User");
app.use(express.json()); // to treat req.body as a json object

mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log("database connected");
  }
);
/*
const usermodel = new user({
  name: "Med Amine",
  age: 31,
  mobilephone: 53185696,
  email: "hamdimohamedamine@gmail.com",
});

usermodel
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });
*/
// add a new user
app.use("/", require("./routes/userRouter"));

app.listen(5000, () => {
  console.log("conected...");
});
