import { Component, OnInit } from '@angular/core';
// import Employee Model
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';


@Component({
  
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  
  employees: Employee[];
  searchTerm:string;
  test2:string;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
  this._employeeService.getEmployees().subscribe(empList => this.employees = empList);
  //this._employeeService.testTheApiService().subscribe(test => this.test2=test);
  }
}