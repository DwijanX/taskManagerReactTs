import TaskApi from "../adapters/task.adapter";
import { Task } from "../domain/task";

class TaskService {
    private taskApi: TaskApi;

    constructor(taskApi: TaskApi) {
        this.taskApi = taskApi;
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
}

export default TaskService;