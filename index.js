const express = require("express");
const tasksRouter = require("./routes/tasksRouter");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("works");
});

app.use("/tasks", tasksRouter);

app.use((error, req, res, next) => {
  const { message = "internal server error", status = 500 } = error;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Server is running");
});
