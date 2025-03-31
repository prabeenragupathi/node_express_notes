const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/practice")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

//creating schema
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

//? creating model in db
const Course = mongoose.model("Course", courseSchema);

//creating inserting data in db
const insertData = (name, author, tags, isPublished) => {
  const course = new Course({
    name,
    author,
    tags,
    isPublished,
  });
  course.save();
  console.log("added course" + course);
};

// insertData("node js", "prabeen ragupathi", ["js, node"], true);
// insertData("express js", "preethi ragupathi", ["js, node", "express"], true);
// insertData(
//   "react js",
//   "prabeen ragupathi",
//   ["js", "react", "tailwindcss"],
//   true
// );
// insertData("tailwind css", "prabeen ragupathi", ["css", "tailwindcss"], false);

const allCourses = async () => {
  const all = await Course.find().countDocuments();
  console.log(all);
};

allCourses();
