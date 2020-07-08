import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Department } from '../departments/department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  panelTitle: string;
  isActive = true;
  gender = "male";
  previewPhoto = false;
  departments: Department[];
  employee: Employee = {
    id: null,
    first_name: null,
    last_name: null,
    department_id: null,
    birth_date: null
  };

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute, private departmentService: DepartmentService) { }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
    // this.getDepartments();
    this.departmentService.getDepartments().subscribe(departments =>this.departments = departments);
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null, first_name: null, last_name: null,
        birth_date: null, department_id: null

      };
      // this.createEmployeeForm.reset();
      this.panelTitle = 'Create Employee';
    } else {
      this._employeeService.getEmployee(id).subscribe(
        (employee) => { this.employee = employee; },
        (err: any) => console.log(err)
      );
      this.panelTitle = 'Edit Employee';
    }
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }
  saveEmployee(empForm: NgForm): void {
    if (this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          // log the employee object after the post is completed
          console.log(data);
          // empForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => { console.log(error); }
      );
    } else {
       this._employeeService.updateEmployee(this.employee).subscribe(
         () => {
           this._router.navigate(['list']);
         });
    }


  }
}
