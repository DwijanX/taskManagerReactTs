import { Task } from "../domain/models/task";


class TaskApi {
    tasks:Task[]
    constructor() {
        // Initialize the tasks array
        this.tasks = [
          new Task(1, "Task 1", false),
          new Task(2, "Task 2", true),
        ];
      }
    async getAllTasks(): Promise<Task[]> {
        
        return [...this.tasks];
    }
    async createTask(task:Task) {
        const newId = Math.max(...this.tasks.map((t) => t.id)) + 1;
        task.id = newId;
        this.tasks.push(task);
        return task;
      }
}

export default TaskApi;