import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.taskId} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;