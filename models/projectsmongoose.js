import mongoose from "mongoose";

const projectsSchema = mongoose.Schema({
    Project_id: String,
    subject: String,
    project_title: String,
    Description: String,
    time_commitment: Number,
  });

  export const projects = mongoose.model("projects", projectsSchema);

  export const addAProject = async (newProject) => {
    await projects.create(newProject);
    console.log("You've added project", newProject);
    return 0;
  };

  
  