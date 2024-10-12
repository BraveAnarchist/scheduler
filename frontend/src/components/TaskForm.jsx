import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task, frequency);
    setTask('');
    setFrequency('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="frequency">Frequency (in seconds):</label>
        <input
          type="number"
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;