const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const cronJobs = require('./cronJobs.js'); 

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.post('/tasks', (req, res) => {
  const { task, frequency } = req.body;
  console.log(task,frequency)
  cronJobs.addTask(task, frequency);
  res.send('Task added successfully!');
});


app.get('/tasks', (req, res) => {
  res.json(cronJobs.getTasks());
});


app.get('/logs', (req, res) => {
  res.json(cronJobs.getLogs());
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});