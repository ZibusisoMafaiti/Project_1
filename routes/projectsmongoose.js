import express, { response } from 'express';
import { addAProject, changeProject,getAllProjects } from '../models/projectsmongoose.js';




const router = express.Router();

router.post("/", async (request, response)=> {
    const newProject = request.body;
    const id = await addAProject(newProject);
    response.send(`Another project added ${ newProject.project_title}- ${id}`)
})

router.patch("/", (request, response) => {
    const projectId = request.query.projectId;
    console.log(projectId);
    const changeData = request.body;
    changeProject(projectId, changeData);
    response.send("You've edited");
});

router.get("/",async(request,response)=> {
    
    response.send (await getAllProjects());
});


export default router;