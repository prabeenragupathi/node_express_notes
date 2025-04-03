//* creating register users & login to authenticate & authorize them

const express = require("express");
const app = express();
const users = require("./routes/users");
const auth = require("./routes/auth");
const mongoose = require("mongoose");

//! connecting mongodb here
mongoose
  .connect("mongodb://localhost:27017/practice")
  .then(() => console.log("connected to db"))
  .catch((err) => console.error(err));

app.use(express.json());

//? redirecting the request to appropirate route
app.use("/api/users", users);
app.use("/api/auth", auth);

app.listen("3000", () => {
  console.log("port is listening in 3000");
});
