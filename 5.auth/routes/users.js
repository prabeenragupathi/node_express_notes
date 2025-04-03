const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User, validateUser } = require("../model/users");
const _ = require("lodash");
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send(new Error("user already registered"));

  user = new User(_.pick(req.body, ['name', 'email', 'password']));

  //? hasing pwd
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  res.status(200).send(_.pick(user, ["id", "name", "email"]));
});

module.exports = router;
