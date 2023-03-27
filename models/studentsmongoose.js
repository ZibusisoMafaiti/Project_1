import mongoose from "mongoose";


const studentsSchema = mongoose.Schema({
  Password: String,
  name: String,
  email: String,
  Grade: Number,
  Projects: [{type:mongoose.Schema.Types.ObjectId,
  ref:"projects"}],
});
export const students = mongoose.model("students", studentsSchema);


//const studentData = await students.find();

export const addAStudent = async (newStudent) => {
  await students.create(newStudent);
  console.log("new student is", newStudent);
  return 0;
};

