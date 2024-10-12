const cron = require('node-cron');
const nodemailer = require("nodemailer");
require( "dotenv/config");
const tasks = [];
const logs = [];

function addTask(task, frequency) {

  const taskId = Math.random().toString(36).substring(2, 15);

  cron.schedule(`*/${frequency} * * * * *`, () => {
    console.log(`Task ${taskId}: ${task}`);
    logs.push({ taskId, timestamp: new Date(), task });
  });

  tasks.push({ taskId, task, frequency });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.name,
      pass: process.env.password,
    },
  });

  let msg = {
    from: process.env.name,
    to: email,
    subject: "Message sent using nodemailer",
    text: `hi ${name} with email ${email}. Here is a message - ${message}`,
  };

  transporter
    .sendMail(msg)
    .then((info) => {
      console.log("Email Sent: " + info.response);
      res.status(200).send("Done");
    })
    .catch((err) => {console.log(err)
      res.status(403).send("error:"+ err)
    });
}

function getTasks() {
  return tasks;
}

function getLogs() {
  return logs;
}

module.exports = {
  addTask,
  getTasks,
  getLogs,
};