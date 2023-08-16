import  { useEffect, useState } from "react";
import TaskService from "../../../../ports/task.port";
import { Task } from "../../../../../domain/models/task";
import Navbar from "../../../../components/navbar";
import TaskCard from "./taskCard";
import { useNavigate  } from "react-router-dom"
function TaskListView() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskService = new TaskService();

  const handleFetchItems=()=>{
    taskService.getAllTasks().then((tasks) => {
      setTasks(tasks);
    });
  }
  useEffect(() => {
    handleFetchItems()
  }, []);
  const handleEdit = (task: Task) => {
    navigate(`/update/${task.id}`);
  };

  const handleDelete = (taskId: number) => {
    const deleteAction=async()=>{
      await taskService.deleteTask(taskId)
      handleFetchItems()
    }    
    deleteAction()

  };

  return (
    <div>
      <Navbar></Navbar>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskCard task={task} onEdit={handleEdit} onDelete={handleDelete}></TaskCard>
        ))}
      </ul>
    </div>
  );
}

export default TaskListView;