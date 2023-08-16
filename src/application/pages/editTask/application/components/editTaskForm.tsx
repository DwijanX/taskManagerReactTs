import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Task } from '../../../../../domain/models/task';

type editTaskFunction = (id:number,task:Task) => void;
interface EditTaskFormProps {
  onEditTask: editTaskFunction;
  task: Task;
}
const EditTaskForm: React.FC<EditTaskFormProps> = ({onEditTask,task}) => {
  const [title, setTitle] = useState(task.title);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (title.trim() === '') {
      // Handle empty title case here
      return;
    }
    let currentTask=new Task(task.id,title,task.completed)
    onEditTask(task.id, currentTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default EditTaskForm