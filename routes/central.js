import express from "express";
const app = express();
app.use(express.json());
import {
  addAStudent,
  getAllStudents,
  changeStudent,
  deleteStudent,
  studentProjects,
  allProjects,
  addProjectStudent,
  addProjectDatabase,
  students,
} from "./students.js";

import { projects } from "./projects.js";

export const central = express.Router();

central.get("/students", (request, response) => {
  response.send(getAllStudents());
});

//
central.get("/", (request, response) => {
  response.send("router is working");
});
central.get("/students/projects", (request, response) => {
  response.send(allProjects());
});

central.post("/students", (request, response) => {
  const newStudent = request.body;
  addAStudent(newStudent);
  response.send("Yey! For class growth!");
});

central.post("/students/projects", (request, response) => {
  const newProject = request.body;
  addProjectDatabase(newProject);
  response.send("You have successfully added" + newProject);
});

central.patch("/students/:studentId", (request, response) => {
  // response.send(allProjects());
  const studentId = +request.params.studentId;
  console.log(studentId);

  let project_id = request.query.addproject;
  console.log(project_id);
  let project = projects.find((project) => project.Project_id === project_id);
  console.log(project);
  addProjectStudent(studentId, project);

  response.send(getAllStudents());

  console.log(getAllStudents());
});

central.delete("/students/:studentToDelete", (request, response) => {
  const studentToDelete = request.params.studentName;
  deleteStudent(studentToDelete);

  response.send(getAllStudents());
});

central.get("/students/:studentId", (request, response) => {
  const studentId = +request.params.studentId;
  response.send(studentProjects(studentId));
});

central.patch("/:studentId", (request, response) => {
  const studentId = +request.params.studentId;
  const changeData = request.body;
  changeStudent(studentId, changeData);

  response.send(getAllStudents());
});
