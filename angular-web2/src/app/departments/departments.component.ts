import { Component, OnInit } from '@angular/core';
import { Department } from './department';
import { DepartmentService } from '../department.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];
  employees:Employee[];

  searchTerm:string;
  department: Department = {
    id: null,
  name: null,
  employees: null, 
  building: null,
  };
  constructor(private departmentService: DepartmentService,private _employeeService: EmployeeService,
    private _router: Router,private location: Location) { }
 ngOnInit() {
     this.getDepartments();
     this._employeeService.getEmployees().subscribe(emp =>this.employees = emp);

  }

getDepartments(): void {
  this.departmentService.getDepartments().subscribe(departments =>this.departments = departments);
}
 
// add(name: string, building: string): void {
//   name = name.trim();
//   if (!name) { return; }
//   building = building.trim();
//   if (!building) {return;}
//   this.departmentService.addDepartment({ name, building } as Department)
//     .subscribe(department => {
//       this.departments.push(department);
//     });
// }


delete(department: Department): void {
  this.departmentService.deleteDepartment(department.id).subscribe(
    () => console.log(`Department with ID = ${this.department.id} Deleted`),
    (err) => console.log(err),()=> this.ngOnInit()
  );
  
}
  

  saveDepartment(departmentForm: NgForm): void {
      
    this.departmentService.addDepartment(this.department).subscribe(
      (data: Department) => {
        // log the task object after the post is completed
        console.log(data);
        // empForm.reset();
        // this._router.navigate(['list']);
      },
      (error: any) => { console.log(error); },()=>this.ngOnInit()
    );
    //this.ngOnInit();
  }
    
  





  

}