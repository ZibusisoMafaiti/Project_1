import mongoose from "mongoose";

const projectsSubschema = mongoose.Schema({
  Project_id: String,
  subject: String,
  project_title: String,
  Description: String,
  time_commitment: Number,
});
const studentsSchema = mongoose.Schema({
  Password: String,
  name: String,
  email: String,
  Grade: Number,
  Projects: [projectsSubschema],
});
export const students = mongoose.model("students", studentsSchema);

//const studentData = await students.find();

export const addAStudent = async (newStudent) => {
  await students.create(newStudent);
  console.log("new student is", newStudent);
  return 0;
};
