const express = require("express");
const app = express();
const cusMidware = require('./customMiddlewares');

app.use(express.json());

app.use(cusMidware.logger);
app.use(cusMidware.auth);

// ? just simple requestin handling with small example
let courses = {
  1: { id: 1, name: "Front end" },
  2: { id: 2, name: "Back end" },
  3: { id: 3, name: "Full Stack" },
  4: { id: 4, name: "UI/UX designer" },
};

//? api request to get all courses
app.get("/api/courses", (req, res) => {
  const courseObject = Object.keys(courses).map((id) => courses[id]);
  res.send(JSON.stringify(courseObject));
});

//? api request to get specific courses
app.get("/api/courses/:id", (req, res) => {
  const courseObject = courses[req.params.id];

  if (!courseObject)
    res.status(404).send(`Course not found for the id ${req.params.id}`);
  res.send(courseObject);
});

//? api post request to add new course in courses list
app.post("/api/course", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).send("Name of course is must");
    return;
  }
  //   console.log(req.body);

  let id = Math.max(...Object.keys(courses).map(Number)) + 1;
  const newCourse = { id, name };
  courses[id] = newCourse;

  res.status(201).send(newCourse);
});

//? put request to update course
app.put("/api/course/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let data = courses[id];

  if (!data) {
    res.status(404).send("Course not found");
    return;
  }

  if (!name) {
    res.status(404).send("Name of course is must");
    return;
  }

  data = { ...data, name };
  courses[id] = data;

  res.status(200).send(data);
});

//? delete request
app.delete("/api/course/:id", (req, res) => {
  const { id } = req.params;

  let data = courses[id];

  if (!data) {
    res.status(404).send("Course not found");
    return;
  }

  delete courses[id];

  res.status(200).send({message: "deleted successfully"})
});

app.listen("3000", () => console.log("listening on port 3000"));
