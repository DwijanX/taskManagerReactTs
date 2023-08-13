import { Task } from "../domain/models/task";

class TaskApi {
  static TASKS_STORAGE_KEY = "tasks";

  async getAllTasks(): Promise<Task[]> {
    const storedTasks = localStorage.getItem(TaskApi.TASKS_STORAGE_KEY);
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    return tasks;
  }

  async createTask(task: Task) {
    const tasks = await this.getAllTasks();
    const newId = Math.max(...tasks.map((t) => t.id), 0) + 1;
    task.id = newId;
    tasks.push(task);
    localStorage.setItem(TaskApi.TASKS_STORAGE_KEY, JSON.stringify(tasks));
    return task;
  }
}

export default TaskApi;