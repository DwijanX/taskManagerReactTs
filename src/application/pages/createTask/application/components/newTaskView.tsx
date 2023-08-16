import CreateTaskForm from './taskForm';
import TaskService from '../../../../ports/task.port';
import Navbar from '../../../../components/navbar';

const newTaskView = () => {
  const taskService = new TaskService();
  const handleCreateTask = (title:string) => {
    taskService.createTask(title)
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1>Task Management App</h1>
      <CreateTaskForm onCreateTask={handleCreateTask} />
    </div>
  );
};

export default newTaskView;