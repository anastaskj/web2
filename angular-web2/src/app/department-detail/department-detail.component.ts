import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../departments/department';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService }  from '../department.service';
import { Observable } from 'rxjs';
import {EmployeeService} from '../employees/employee.service'
import {Employee} from '../models/employee.model'

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
	
  @Input() department: Department;
  employees:Observable<Employee[]>;

  newEmployees: string[] = [];

  check: number;

  constructor( private route: ActivatedRoute,
  private departmentService: DepartmentService, private employeeService: EmployeeService,
  private location: Location) { }

 ngOnInit(): void {
  
  this.getDepartment();
  this.employees = this.employeeService.getEmployees();
  this.checkDepartments();
}
getDepartment(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.check = id;
  this.departmentService.getDepartment(id)
    .subscribe(department => this.department = department);
}

checkDepartments():void{
  // for (var i = 0; i < this.employees.length; i++) {
  //   if (this.employees[i].department == this.check.toString()) {
  //     this.newEmployees.push(this.employees[i].name);
  //   }
  // }
}


goBack(): void {
  this.location.back();
}
save(): void {
   this.departmentService.updateDepartment(this.department)
     .subscribe(() => this.goBack());
 }
}
