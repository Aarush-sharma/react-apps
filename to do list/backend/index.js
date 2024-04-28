const express = require("express");
const { User } = require("./db");
const app = express();
const cors = require("cors");
const { task } = require("./types");

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json()); // to get the input from body

const eligible = async (req, res, next) => {
  const { email, task, update } = req.body;
  if (!email || !task || !update) {
    return res.status(400).json({ msg: "Missing required fields" });
  } else{
    next();
  }
};

app.get("/", async function (req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });
  res.json({
    user,
  });
 
});

app.post("/", async (req, res) => {
  const { name } = req.body;
  const { password } = req.body;
  const { email } = req.body;
  const { update, newtask } = req.body;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    if (existingUser && update) {
        existingUser.tasks.push(newtask);
        await existingUser.save();
        res.json({ msg: "Task added to existing user" });
    } else {
      res.json({ alert: "something went wrong idk" });
    }
  } else {
    const user = new User({
      name: name,
      email: email,
      password: password,
    });
    user.save()
    res.json({ msg: "user created succesfully" });
  }
});

app.put("/", eligible,async (req, res) => {
  const { email, task, update, newtask } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser && update) {
    const taskIndex = existingUser.tasks.indexOf(task);

    if (taskIndex !== -1) {
      existingUser.tasks[taskIndex] = newtask;

      await existingUser.save();

      return res.json({ msg: "Task updated successfully" });
    } else {
      return res.status(404).json({ msg: "Task not found for the user" });
    }
  }
});

app.delete("/",eligible, async (req, res) => {
  const { email, task, update } = req.body;
  const existingUser = await User.findOne({ email });

    if (existingUser && update) {
      const taskIndex = existingUser.tasks.indexOf(task);

      if (taskIndex !== -1) {
        existingUser.tasks.splice(taskIndex, 1);

        await existingUser.save();

        return res.json({ msg: "Task deleted successfully" });
      } else {
        return res.status(404).json({ msg: "Task not found for the user" });
      }
    }
});

app.use(function (err, req, res, next) {
  // global catcher function for err
  res.send({ msg: "OOPS!! , something went wrong." });
});

app.listen(3000);
/*
 
*/
