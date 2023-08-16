import { useState,useEffect } from 'react';
import { Task } from '../../../../../domain/models/task';
import TaskService from '../../../../ports/task.port';
import EditTaskForm from './editTaskForm';
import { useParams } from 'react-router-dom';
import Navbar from '../../../../components/navbar';
const EditTaskView = () => {
  const { id } = useParams();
  const [task,setTask]=useState<Task|null>()
  const taskService = new TaskService();
  const handleEditTask = (id:number,task:Task) => {
    taskService.updateTask(id,task)
  };
  useEffect(()=>{
    const fetchData=async()=>{
      let task:Task | null=await taskService.getTaskById(Number(id))
      setTask(task)
    }
    fetchData()
  },[])

  return (
    <div>
      <Navbar></Navbar>
      <h1>Task Management App</h1>
      {task &&<EditTaskForm onEditTask={handleEditTask} task={task}/>}
    </div>
  );
};

export default EditTaskView;