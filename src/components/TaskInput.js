import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');  // Limpar o campo após adicionar a tarefa
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskInput;