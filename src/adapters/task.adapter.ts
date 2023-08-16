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
  async getTaskById(id: number): Promise<Task | null> {
    const tasks = await this.getAllTasks();
    const task = tasks.find((t) => t.id === id);
    return task || null;
  }
  async updateTask(id: number, updatedTask: Task): Promise<void> {
    const tasks = await this.getAllTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
      localStorage.setItem(TaskApi.TASKS_STORAGE_KEY, JSON.stringify(tasks));
    } else {
      throw new Error(`Task with ID ${id} not found.`);
    }
  }
}

export default TaskApi;