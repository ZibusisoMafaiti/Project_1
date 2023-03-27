import express, { response } from 'express';
import { addAStudent } from '../models/studentsmongoose.js';



const router = express.Router();

// router.post("/",(request,response) => { response.send('working')});

router.post("/", async (request, response) => {
    const newStudent = request.body;
    const id = await addAStudent(newStudent);
    response.send(`Yey! For class growth! Added ${ newStudent.name}- ${id}`)});

export default router;