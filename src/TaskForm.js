
import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const calculateDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  const addTask = () => {
    if (taskDescription && dueDate) {
      const daysRemaining = calculateDaysRemaining(dueDate);
      const newTask = { description: taskDescription, daysRemaining, completed: false };
      setTasks([...tasks, newTask]);
      setTaskDescription('');
      setDueDate('');
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="task-form-container">
      <h2 className="form-title">Task Form</h2>
      <div className="task-inputs">
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
  
      <div className="task-list">
        <h2 className="task-list-title">TASK LIST</h2>
        {tasks.map((task, index) => (
          <div className="task-box" key={index}>
            <p className="task-description">{task.description} - {task.daysRemaining} days remaining</p>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskForm;
