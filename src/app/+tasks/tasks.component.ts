import { Component, OnInit } from '@angular/core';
import {TaskListComponent} from "../task-list/task-list.component";

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  directives: [TaskListComponent]
})
export class TasksComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
