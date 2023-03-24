import express, { request, response } from "express";

import{central} from "./routes/central.js";

const app = express();

const PORT = 5050;

app.use(express.json());
app.use("/central", central);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// app.get("/students", (request, response) => {
//   response.send(students);
// });

// app.use("/students", import("./routes/studentlistroute"));
