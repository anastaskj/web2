import { Injectable } from '@angular/core';
import { Task } from './tasks/task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private tasksUrl = 'api/tasks';  // URL to web api
  baseUrl='http://i875395.hera.fhict.nl/api/360236/task';

  constructor(private http: HttpClient,private _httpClient:HttpClient,private messageService: MessageService) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>('http://i875395.hera.fhict.nl/api/360236/task')
    
  }
  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }
  getTask(id: number): Observable<Task> {
//     const url = `${this.tasksUrl}/${id}`;
    
//     let task =  this.http.get<Task>(url);
// //    task.subscribe(x=>console.log(x));
//     return task;
return this._httpClient.get<Task>(`${this.baseUrl}?id=${id}`)
  }
 

  updateTask(task: Task): Observable<void> {
    return this._httpClient.put<void>(`${this.baseUrl}?id=${task.id}`, task, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
  }
  

  // addTask (task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.tasksUrl, task, httpOptions)
  //   ;
  // }
  addTask(task: Task): Observable<Task> {

    return this._httpClient.post<Task>('http://i875395.hera.fhict.nl/api/360236/task',
        task, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
 
}
  deleteTask (id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseUrl}?id=${id}`);
  }
 
}
