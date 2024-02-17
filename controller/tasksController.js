const fs = require("fs/promises");
const path = require("path");
const tasksPath = path.join(__dirname, "../", "/db/tasks.json");

const getTasks = async (req, res) => {
  const tasks = await fs.readFile(tasksPath);
  res.send(tasks);
};

const createTasks = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      throw new Error("bad request");
    }
    const tasks = JSON.parse(await fs.readFile(tasksPath));
    const newTask = { id: tasks.length + 1, name, description };
    tasks.push(newTask);
    await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
    res.sendStatus(200);
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

module.exports = { getTasks, createTasks };
