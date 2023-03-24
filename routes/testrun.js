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