const express = require("express");
const router = express.Router();
const { User } = require("../model/users");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const auth = await bcrypt.compare(req.body.password, user.password);
  if (!auth) return res.status(400).send("Invalid email or password");

  const token = jwt.sign({ _id: user._id }, '1234qwer1234');

  res.status(200).send(token);
});

const validate = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });

  return schema.validate(user);
};

module.exports = router;
