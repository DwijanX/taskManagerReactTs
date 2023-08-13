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
}

export default TaskService;