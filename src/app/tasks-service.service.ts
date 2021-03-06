import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import {Observable} from "rxjs/Observable";
import {Paged, GetTasksResult} from "./model/generated";

@Injectable()
export class TasksServiceService {

  private tasksUrl = "http://localhost:9080/trinity/service/tasks";

  constructor (private http: Http) {}

  getTasks(paged: Paged): Observable<GetTasksResult> {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .put(this.tasksUrl, JSON.stringify(paged), {headers: headers})
        .map(this.extractData)
        .catch(this.handleError)
  }
  private extractData(res: Response): GetTasksResult {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
