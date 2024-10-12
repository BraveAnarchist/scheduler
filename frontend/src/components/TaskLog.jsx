import React from 'react';

function TaskLog({ logs }) {
  return (
    <div>
      <h2>Task Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.taskId}>
            {log.timestamp.toLocaleString()} - Task {log.taskId}: {log.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskLog;