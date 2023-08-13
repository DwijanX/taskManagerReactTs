import  { useEffect, useState } from "react";
import TaskService from "../../../../ports/task.port";
import { Task } from "../../../../../domain/models/task";

function TaskListView() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskService = new TaskService();

  useEffect(() => {
    taskService.getAllTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} readOnly />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskListView;