// Generated using typescript-generator version 1.7.192 on 2016-05-05 12:40:53.

    export interface GetTasksResult {
        total: number;
        tasks: Task[];
    }

    export interface Paged {
        from: number;
        size: number;
    }

    export interface Task {
        createDate: Date;
        dueDate: Date;
        id: number;
        name: string;
    }
