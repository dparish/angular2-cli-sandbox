import { Injectable } from '@angular/core';
import {Task} from "./model/task";

@Injectable()
export class TasksServiceService {

  constructor() {}

  getTasks() {
    var tasks: Task[] = [];
    tasks.push({id: 3, name: "bob"})
    tasks.push({id:4, name: "sue"})
    return tasks;
  }

}
