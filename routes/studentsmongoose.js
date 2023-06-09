import express, { request, response } from 'express';
import { projects } from '../models/projectsmongoose.js';
// import { addAProject, changeProject } from '../models/projectsmongoose.js';
import { addAStudent,changeStudent,addProjectStudent,getAllStudents, students,deleteStudent,deleteProjectStudent } from '../models/studentsmongoose.js';



const router = express.Router();

// router.post("/",(request,response) => { response.send('working')});

router.post("/", async (request, response) => {
    const newStudent = request.body;
    const id = await addAStudent(newStudent);
    response.send(`Yey! For class growth! Added ${ newStudent.name}- ${id}`)});

   
    router.patch("/", (request, response) => {
        const studentEmail = request.query.email;
        const changeData = request.body;
        changeStudent(studentEmail, changeData);
        response.send("student edited");
    });
//     router.patch("/projects", (request, response) => {
//         const studentEmail = request.query.email;
//         console.log(studentEmail);
//         const projectId = request.query.projectId;
//         console.log(projectId);
//  addProjectStudent (studentEmail, projectId) ;
//  response.send("you added a new project");

//     })
router.patch("/projects",async  (request, response) => {
    const studentEmail = request.query.email;
    console.log(studentEmail);
    const projectname = request.query.projectname;
    console.log(projectname);
 addProjectStudent (studentEmail, projectname) ;
response.send("Your new portfolio" + await addProjectStudent(studentEmail,projectname));

})

router.delete("/projects",async (request, response) => {
    const studentEmail = request.query.email;
     const projectId = request.query.projectId;
    await deleteProjectStudent (studentEmail,projectId);
    response.send("You've deleted a project")
})


    // central.get("/students", (request, response) => {
    //     response.send(getAllStudents());
    //   });
    router.get("/",async(request,response)=> {
        // getAllStudents();
        response.send (await getAllStudents());
    });

    router.delete("/",async (request,response)=> {
        const studentEmail = request.query.email;
        deleteStudent(studentEmail);
        response.send(await deleteStudent(studentEmail))
    });

    
export default router;