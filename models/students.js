import mongoose from '../studentsmongoose.js';


const projectsSubschema = mongoose.Schema({
  Project_id: String,
  subject: String,
  project_title: String,
  Description: String,
  time_commitment: Number,  
})
const studentsSchema = mongoose.Schema({
    id: Number,
    Password: String,
    name: String,
    email: String,
    Grade: Number,
    Projects: [projectsSubschema],
});
const students = mongoose.model('students',studentsSchema)

const studentData = await students.find();

console.log(studentData );