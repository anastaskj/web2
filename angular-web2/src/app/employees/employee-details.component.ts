import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
import { Department } from '../departments/department';
import { DepartmentService } from '../department.service';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee;

  constructor(private _route: ActivatedRoute,
    private _employeeService: EmployeeService) { }

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];
    this._employeeService.getEmployee(id).subscribe(e => this.employee = e);
  }
  // {
  //   this._route.paramMap.subscribe(params => {
  //     this._id = +params.get('id');
  //     this._employeeService.getEmployee(this._id).subscribe(
  //       (employee) => this.employee = employee,
  //       (err: any) => console.log(err)
  //     );
  //   });
  // }

}
