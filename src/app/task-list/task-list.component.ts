import { Component, OnInit } from '@angular/core';
import {TasksServiceService} from "../tasks-service.service";
import {Task} from "../model/task";

@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css'],
  providers: [TasksServiceService]
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private tasksService: TasksServiceService) {}

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

}
