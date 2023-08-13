import { Task } from "../domain/task";
class TaskApi {
    async getAllTasks(): Promise<Task[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const tasks: Task[] = [
                    new Task(1, "Task 1", false),
                    new Task(2, "Task 2", true),
                ];
                resolve(tasks);
            }, 500);
        });
    }
}

export default TaskApi;