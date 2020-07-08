
import { Employees } from './employee';
import { EMPLOYEES } from '../mock-employees';
import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Department } from '../departments/department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() employee: Employee;
  @Input() searchTerm: string;
  private selectedEmployeeId: number;
  constructor(private _route: ActivatedRoute, private _router: Router,
  private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }
  viewEmployee() {
    this._router.navigate(['list/view/', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });

  }
  editEmployee(){
    this._router.navigate(['list/edit',this.employee.id]);
  }
  deleteEmployee(){
    this._employeeService.deleteEmployee(this.employee.id);
  }
  onClick(employeeId:number){
    this._router.navigate(['list/employees',employeeId])
  }
}