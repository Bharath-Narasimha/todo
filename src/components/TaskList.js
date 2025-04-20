import React from 'react';
import TaskItem from './TaskItem';

/**
 * TaskList component for rendering the list of tasks
 * @param {Object} props
 * @param {Array} props.tasks 
 * @param {Function} props.deleteTask 
 * @param {Function} props.toggleComplete 
 */
function TaskList({ tasks, deleteTask, toggleComplete }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet! Add a task to get started.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;