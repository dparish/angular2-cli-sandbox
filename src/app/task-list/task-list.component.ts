import { Component, OnInit } from '@angular/core';
import { Http, Response, HTTP_PROVIDERS} from '@angular/http';
import {TasksServiceService} from "../tasks-service.service";
import {Task, Paged, GetTasksResult} from "../model/generated"

@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css'],
  providers: [TasksServiceService, HTTP_PROVIDERS]
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  errorMessage: String;
  total: number = 0;
  paged: Paged = {
    from: 0,
    size: 20
  };

  constructor(private tasksService: TasksServiceService) {}

  ngOnInit() {
    this.getTasks();
  }

  nextClicked() {
    this.paged.from += this.paged.size;
    this.getTasks();
  }

  previousClicked() {
    if (this.paged.from != 0) {
      this.paged.from -= this.paged.size;
    }
    this.getTasks();
  }

  private getTasks() {
    this.tasksService.getTasks(this.paged)
      .subscribe((res: Response) => {
        var taskResponse: GetTasksResult = res.json();
        this.tasks = taskResponse.tasks;
        console.log("got " + this.tasks.length + " tasks");
        this.total = taskResponse.total;
      });
  }
}
