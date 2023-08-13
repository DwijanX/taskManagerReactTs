import React, { useState } from 'react';
import CreateTaskForm from './taskForm';
import TaskService from '../../../../ports/task.port';
const App = () => {
  const taskService = new TaskService();
  const handleCreateTask = (title:string) => {
    let createdTask=taskService.createTask(title)
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <CreateTaskForm onCreateTask={handleCreateTask} />
    </div>
  );
};

export default App;