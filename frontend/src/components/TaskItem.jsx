import React from 'react';

function TaskItem({ task }) {
  return (
    <li>
      <b>{task.task}</b> - Every {task.frequency} seconds
    </li>
  );
}

export default TaskItem;