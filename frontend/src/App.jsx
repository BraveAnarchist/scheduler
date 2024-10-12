import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskLog from './components/TaskLog';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchTasks();
    fetchLogs();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:3001/tasks');
    const data = await response.json();
    setTasks(data);
  };

  const fetchLogs = async () => {
    const response = await fetch('http://localhost:3001/logs');
    const data = await response.json();
    setLogs(data);
  };

  const addTask = async (task, frequency) => {
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task, frequency }),
    });
    if (response.ok) {
      fetchTasks();
    }
  };

  return (
    <div className="App">
      <h1>Task Scheduler</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
      <TaskLog logs={logs} />
    </div>
  );
}

export default App;