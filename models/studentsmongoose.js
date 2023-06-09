import mongoose from "mongoose";
import { projects } from "./projectsmongoose.js";

const studentsSchema = mongoose.Schema({
  Password: String,
  name: String,
  email: String,
  Grade: Number,
  Projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "projects" }],
});
export const students = mongoose.model("students", studentsSchema);

//const studentData = await students.find();

export const addAStudent = async (newStudent) => {
  await students.create(newStudent);
  console.log("new student is", newStudent);
  return 0;
};

export const changeStudent = async (studentEmail, update) => {
  let test = await students.findOneAndReplace({ email: studentEmail }, update);
  console.log(test);
  console.log("found", studentEmail);
};

// export const addProjectStudent = async (studentEmail, projectId) => {
//   let selectedStudent = await students.findOne({ email: studentEmail });
//   selectedStudent.Projects.push(projectId);
//   await selectedStudent.save();
//   // await students.replaceOne({selectedStudent},selectedStudent)
// };

export const addProjectStudent = async (studentEmail, projectname) => {
  let selectedStudent = await students.findOne({ email: studentEmail });
  let selectedProject = await projects.findOne({project_title: projectname }) ;
  selectedStudent.Projects.push(selectedProject);
  await selectedStudent.save();
  return (selectedStudent.populate("Projects", "project_title"))
  // await students.replaceOne({selectedStudent},selectedStudent)
};

export const deleteProjectStudent = async (studentEmail, projectId) => {

 
   let selectedStudent = await students.findOne({ email: studentEmail});
   console.log(selectedStudent);
  let selectedProject = await selectedStudent.Projects.indexOf(projectId);//indexOf(projectId)
  console.log(selectedProject);
   selectedStudent.Projects.splice(selectedProject, 1);
await selectedStudent.save();
  console.log(selectedStudent.Projects)};
    // return (selectedStudent.Projects)};//.save()
  // return (selectedProject.populate("Projects","project_title"))} return await selectedProject
;

export const deleteStudent = async(studentEmail) =>{ 
   await students.findOneAndDelete({ email: studentEmail });
   return(getAllStudents())
};


export const getAllStudents = async () => {
  let data = await students.find({}).populate("Projects", "project_title");
  console.log(data);
  return data;
};
