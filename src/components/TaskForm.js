import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

/**
 * TaskForm component for adding new tasks
 * @param {Object} props
 * @param {Function} props.addTask 
 */
function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName(''); 
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-button">
        <PlusIcon className="add-icon" style={{ width: '20px', marginRight: '5px' }} />
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;