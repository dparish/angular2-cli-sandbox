import { Component, OnInit } from '@angular/core';
import { TasksComponent } from './+tasks';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'test-app-app',
  templateUrl: 'test-app.component.html',
  styleUrls: ['test-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/tasks', component: TasksComponent}
])
export class TestAppAppComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/tasks']);
  }

  title = 'test-app works!';
}
