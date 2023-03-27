import express, { response } from 'express';
import { addAProject, changeProject } from '../models/projectsmongoose.js';
import { addAStudent,changeStudent } from '../models/studentsmongoose.js';



const router = express.Router();