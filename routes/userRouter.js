const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
const userModel = require("../models/User");

const router = express.Router();

// add a new user :

router.post("/adduser", (req, res) => {
  const { name, age, mobilephone, email } = req.body;
  const user = new userModel({
    name,
    age,
    mobilephone,
    email,
  });
  user
    .save()
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(400).json({ msg: "err" }));
});

// get all users :

router.get("/users", (req, res) => {
  userModel
    .find()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(400).send({ message: "can't get any data " });
    });
});

// delete a user :

router.delete("/remove/:id", (req, res) => {
  userModel
    .findByIdAndRemove(req.params.id)
    .then((user) => {
      res.status(200).send({ msg: " delete user with success" });
    })
    .catch((error) => {
      res.status(400).send({ message: "error delete user" });
    });
});

// update a user :

router.put("/update/:id", (req, res) => {
  userModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch((error) => {
      res.status(400).send({ message: "err delete user" });
    });
});

module.exports = router;
