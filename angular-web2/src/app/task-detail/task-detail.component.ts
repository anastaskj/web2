import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tasks/task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TasksService }  from '../tasks.service';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  employees:Employee[];

  constructor(private route: ActivatedRoute,
    private taskService: TasksService,
    private location: Location,
    private _employeeService: EmployeeService) { }

    ngOnInit(): void {
      this.getTask();
      this._employeeService.getEmployees().subscribe(emp =>this.employees = emp);

    }
 
     
    getTask(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.taskService.getTask(id)
        .subscribe(task => this.task = task);
    }
    
    goBack(): void {
      this.location.back();
    }
    save(): void {
      this.taskService.updateTask(this.task)
        .subscribe(() => this.goBack());
    }
    
}
