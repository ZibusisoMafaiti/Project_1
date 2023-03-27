import express, { response } from 'express';
import { addAProject } from '../models/projectsmongoose.js';
import { addAStudent } from '../models/studentsmongoose.js';



const router = express.Router();

// router.post("/",(request,response) => { response.send('working')});

router.post("/", async (request, response) => {
    const newStudent = request.body;
    const id = await addAStudent(newStudent);
    response.send(`Yey! For class growth! Added ${ newStudent.name}- ${id}`)});

    router.post("/projects", async (request, response)=> {
        const newProject = request.body;
        const id = await addAProject(newProject);
        response.send(`Another project added ${ newProject.project_title}- ${id}`)
    })

export default router;