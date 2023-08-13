import React, { useEffect, useState } from "react";
import TaskService from "../task.port";
import TaskApi from "../../adapters/task.adapter";
import { Task } from "../../domain/task";

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskService = new TaskService(new TaskApi());

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

export default TaskList;