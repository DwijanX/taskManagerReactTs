import TaskApi from "../../adapters/task.adapter";
import { Task } from "../../domain/models/task";

class TaskService {
    private taskApi: TaskApi;

    constructor() {
        this.taskApi = new TaskApi();
    }

    async getAllTasks(): Promise<Task[]> {
        try {
            const tasks = await this.taskApi.getAllTasks();
            return tasks;
        } catch (error) {
            // Handle errors
            console.error("Error fetching tasks:", error);
            return [];
        }
    }

    async createTask(title:string): Promise<Task|void>{
        try {
            let createdTask=new Task(1,title,false)
            await this.taskApi.createTask(createdTask)
            return createdTask  
        } catch (error) {
            console.log(error);
        }
    }
    async getTaskById(id: number): Promise<Task | null> {
        try {
            const task = await this.taskApi.getTaskById(id);
            return task;
        } catch (error) {
            console.error(`Error fetching task with ID ${id}:`, error);
            return null;
        }
    }
    async updateTask(id: number, updatedTask: Task): Promise<void> {
        try {
          await this.taskApi.updateTask(id, updatedTask);
        } catch (error) {
          console.error(`Error updating task with ID ${id}:`, error);
          // Handle the error appropriately
        }
      }
      async deleteTask(id: number): Promise<void> {
        try {
          await this.taskApi.deleteTask(id);
        } catch (error) {
          console.error(`Error deleting task with ID ${id}:`, error);
          // Handle the error appropriately
        }
      }
}

export default TaskService;