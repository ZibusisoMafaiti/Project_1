import { projects } from "./projects.js";

export let students = [
  {
    id: 0,
    Password: "Password0000",
    name: "Zibusiso",
    email: "zibs@thecoolschool.com",
    Grade: 3,
    Projects: [projects[0], projects[1]],
  },
  {
    id: 1,
    Password: "Password0001",
    name: "Klay",
    email: "klay@thecoolschool.com",
    Grade: 3,
    Projects: [projects[2], projects[1]],
  },
  {
    id: 2,
    Password: "Password0002",
    name: "Steph",
    email: "steph@thecoolschool.com",
    Grade: 3,
    Projects: [projects[2]],
  },
  {
    id: 4,
    Password: "Password0003",
    name: "Draymond",
    email: "draymond@thecoolschool.com",
    Grade: 3,
    Projects: [projects[2], projects[1]],
  },
];

export function getAllStudents() {
  return students;
}
export function addAStudent(student) {
  students.push(student);
}

export function addProjectDatabase(project) {
  projects.push(project);
}

export function changeStudent(studentId, update) {
  const student = students.find((student) => student.id === studentId);
  Object.assign(student, update);
  console.log("found", student);
}
export function deleteStudent(studentName) {
  console.log("before", students);
  students = students.filter((student) => student.name !== studentName);
  console.log("after", students);
}
export function studentProjects(studentId) {
  let studentProjects = students
    .filter((fullStudentInfo) => fullStudentInfo.id === studentId)
    .map((project) => project.Projects);
  return studentProjects;
}
export function allProjects() {
  return projects;
}

export function addProjectStudent(studentId, projectobject) {
  const selectedStudent = students.find(
    (selectedStudent) => selectedStudent.id === studentId
  ); // add new project to a student
  selectedStudent.Projects.push(projectobject);
}
