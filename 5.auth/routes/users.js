const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User, validateUser } = require("../model/users");

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send(new Error("user already registered"));

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();

  res.status(200).send(user);
});

exports = router;
