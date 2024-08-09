import React from 'react';

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <span onClick={() => onToggleComplete(index)}>{task.text}</span>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;