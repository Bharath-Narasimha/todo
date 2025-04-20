import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    if (taskName.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

   const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app-container">
            <div className="task-tracker">
            <h1 className='header'>Task Tracker</h1>

        <TaskForm addTask={addTask} />
        <TaskList 
          tasks={tasks} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      </div>
    </div>
  );
}

export default App;