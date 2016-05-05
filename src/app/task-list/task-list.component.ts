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

  constructor(private tasksService: TasksServiceService) {}

  ngOnInit() {
    var paged: Paged = {
      from: 0,
      size: 50
    };
    this.tasksService.getTasks(paged)
                        .subscribe((res: Response) => {
                          var taskResponse: GetTasksResult = res.json();
                          this.tasks = taskResponse.tasks;
                        });
                        // .subscribe(tasks => this.tasks = tasks,
                        //           error => this.errorMessage = <any>error);
  }

}
