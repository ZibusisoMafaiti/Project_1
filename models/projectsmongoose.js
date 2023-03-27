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

  export const changeProject= async (projectId, update) => {
    let test = await projects.findOneAndReplace({_id:projectId},update)
    console.log(test);
    console.log("found", projectId);
  }
  
  