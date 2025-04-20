import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

/**
 * @param {Object} props
 * @param {Function} props.deleteTask 
 * @param {Function} props.toggleComplete
 */
function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <label className="checkbox-container">
          <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
        <span className="checkmark"></span>  
        </label>
        
        <span className="task-name">{task.name}</span>
      </div>
      
      <button 
        onClick={() => deleteTask(task.id)} 
        className="delete-button"
        aria-label="Delete task"
      >
        <TrashIcon className="delete-icon" />
      </button>
    </li>
  );
}

export default TaskItem;