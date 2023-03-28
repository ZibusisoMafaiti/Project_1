import mongoose from "mongoose";

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

export const addProjectStudent = async (studentEmail, projectId) => {
  let selectedStudent = await students.findOne({ email: studentEmail });
  selectedStudent.Projects.push(projectId);
  await selectedStudent.save();
  // await students.replaceOne({selectedStudent},selectedStudent)
};

export const getAllStudents = async () => {
  let data = await students.find({}).populate("Projects", "project_title");
  console.log(data);
  return data;
};
