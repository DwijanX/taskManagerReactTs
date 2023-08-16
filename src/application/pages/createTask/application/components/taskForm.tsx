import React, { useState, ChangeEvent, FormEvent } from 'react';

type CreateTaskFunction = (taskTitle:string) => void;

const CreateTaskForm: React.FC<{ onCreateTask: CreateTaskFunction }> = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === '') {
    }
    onCreateTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTaskForm;