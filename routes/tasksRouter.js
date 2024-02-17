const express = require("express");
const { getTasks, createTasks } = require("../controller/tasksController");

const tasksRouter = express.Router();

tasksRouter.get("/list", getTasks);
tasksRouter.post("/add", createTasks);

module.exports = tasksRouter;
