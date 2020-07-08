import { Component, OnInit } from '@angular/core';
import { Department } from '../departments/department';
import { DepartmentService } from '../department.service';
import { Task } from '../tasks/task';
import { TasksService } from '../tasks.service';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  departments:Department[] = [];
  employees:Employee[]=[];

  searchTermEmp:string;
  searchTermDep:string;
  searchTermTask:string;
  constructor(private taskService: TasksService, private departmentService: DepartmentService,private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getTasks();
    this.getDepartments();
    this.getEmp();

  }
  getEmp():void{
    this._employeeService.getEmployees().subscribe(empList => this.employees = empList);
  }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks =  tasks);
  }
  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }
  
}


 


