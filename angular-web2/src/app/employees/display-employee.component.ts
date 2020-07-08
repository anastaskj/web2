import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Department } from '../departments/department';
import { DepartmentService } from '../department.service';
import {ListEmployeesComponent} from './list-employees.component'
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTerm: string;
  private selectedEmployeeId: number;
  constructor(private _route: ActivatedRoute, private _router: Router,
  private _employeeService: EmployeeService,private _employeeList: ListEmployeesComponent) { }

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
  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      () => console.log(`Employee with ID = ${this.employee.id} Deleted`),
      (err) => console.log(err),() => this._employeeList.ngOnInit()
    );
    // this.notifyDelete.emit(this.employee.id);
    
  }
 
  onClick(employeeId:number){
    this._router.navigate(['list/employees',employeeId])
  }

}
