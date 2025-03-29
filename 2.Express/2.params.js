const express = require("express");
const app = express();

// ? it get's the query params from the request.
app.get("/qry", (req, res) => {
  res.send(`your query params: ${JSON.stringify(req.query)}`);
});

// ? it is a dynamic route with 1 param
app.get("/:id", (req, res) => {
  res.send(`Your id is: ${req.params.id}`);
});

// ? dynamic routes with more params
app.get("/dob/:year/:month/:date", (req, res) => {
  res.send(`your bday object: ${JSON.stringify(req.params)}`);
});

app.listen("3000", () => console.log("listening on port 3000"));
