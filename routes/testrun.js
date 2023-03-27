// let students = [
//     {
//       id: 0,
//       Password: "Password0000",
//       name: "Zibusiso",
//       email: "zibs@thecoolschool.com",
//       Grade: 3,
//       Projects: ["The Ultimate Flying Machine","World War 2"]
//     },
//     {
//       id: 1,
//       Password: "Password0001",
//       name: "Klay",
//       email: "klay@thecoolschool.com",
//       Grade: 3,
//       Projects: ["Theme Park Project","World War 2"]
//     },
//     {
//       id: 2,
//       Password: "Password0002",
//       name: "Steph",
//       email: "steph@thecoolschool.com",
//       Grade: 3,
//       Projects: ["The ultimate flying machine","World war 2"]
//     },
//     {
//       id: 4,
//       Password: "Password0003",
//       name: "Draymond",
//       email: "draymond@thecoolschool.com",
//       Grade: 3,
//       Projects: ["Rocks","Swimming","Coding","Psychology",]
//     },
//   ];
//   let studentName = "Zibusiso";
//   let studentProjects = students.filter(fullStudentInfo => fullStudentInfo.name === studentName).map(project => project.Projects)
//   console.log(studentProjects);
let tomatoes = { name: "Tomatoes", price: 2.99 };
let cucumbers = { name: "Cucumbers", price: 0.99 };
let onions = { name: "Onions", price: 0.79 };

let groceryStore = { name: "Michael's corner market", products: [tomatoes, cucumbers, onions] };

let iPhone = { name: "iPhone", price: 699 };
let android = { name: "Android", price: 499 };
let windowsPhone = { name: "Windows Phone", price: 399 };

let phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };

let stores = [groceryStore, phoneStore];

stores.forEach(function(store) {
  console.log(store.name + " sells:");
  store.products.forEach(function(product) {
    console.log(product.name);
  });
  console.log("\n");
});
// const studentName = request.params.studentName; // old code for student projects addition
  // console.log(studentName);
  // let project_id = request.query.addproject;
  // console.log(project_id);
  // let project = projects.find((project) => project.Project_id === project_id);
  // console.log(project);
  // addProject(studentName,project);
  // console.log(addProject(studentName,project));
  // response.send(addProject(studentName,project))






  // addProject(studentName, project);
  // let newProject = (studentProjects(studentName)).flat().concat(project); //an array within an array is a nested array - to break into a nested array you can use th flat()function
  // console.log(newProject);
  //  response.send(newProject);

  //  return studentProjects(studentName).flat().concat(project);
  //  students.filter((fullStudentInfo) => fullStudentInfo.name === studentName).map((project) => project.Projects).push(project)
  // return studentProjects(studentName);


  // .concat(project)

// let project1 = request.query.addproject;
// console.log(request.query.addproject);
// if (project1 === ("worldWar2")) {
//   student[1].projects.push(projects[3])
//   console.log(studentProjects(studentName))
//   console.log("true");
//   }
//   else
//   console.log("false");

// response.send(getAllStudents());
//});
// export function studentProjects(studentName) {
//   let studentProjects = students
//   .filter((fullStudentInfo) => fullStudentInfo.name === studentName)
//   .map((project) => project.Projects);
// return studentProjects;
// }
// Need to add functionality for teacher to add projects too
  // console.log(allProjects);
  // let project1 = request.query.worldWar2;
  // if (project1 === "true") {

  //   console.log("true");
  //   } else {

  //   console.log("false")
  // }
  // central.post('/students/projects', (request,response) => {

// const newProject = request.body;

// })
// teacher ability to see students individual projects next step would be for the teacher to be able to see the total amount of time for all their projects and how much time they
//remaining on individual projects and whether they need help or not
//also being able to link the projects to student
// central.patch("/students/:studentName", (request, response) => {
//   const studentName = request.params.studentName;

//   response.send(studentProjects(studentName));
// });

// central.get("/students/projects", (request, response) => {
// central.patch("/students/:studentName", (request, response) => {
//   let project1 = request.query.worldWar2;
//   if (project1 === "true") {
//     console.log("true");()
//     } else {

//     console.log("false")
//   }
// });
// // app.get('/forest', (request, response) => {
//   let daylight = request.query.daylight;

//   if (project1 === 'true') {
//     response.send("You have added WW2 project approx 40 mins");
//   } else {
//     response.send("zero project");
//   }
// // })
