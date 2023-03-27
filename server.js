import express, { request, response } from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import studentsRouter from "./routes/studentsmongoose.js";

// import{central} from "./routes/central.js";//commented out to set up mongo db

const app = express();

const PORT = 5050;

app.use(express.json());
// app.use("/central", central);//This is needed if you're not going to use mongo I commented it out to set up the mongo db

dotenv.config();

let db = await mongoose.connect(process.env.MONGO_URL);

app.use("/students",studentsRouter)
app.use("/projects",projectsRouter)
app.get("/test", (request,response) => {
response.send("test endpoint working ")

})
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// app.get("/students", (request, response) => {
//   response.send(students);
// });

// app.use("/students", import("./routes/studentlistroute"));
