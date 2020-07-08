import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TasksService } from '../tasks.service';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import { Department } from '../departments/department';
import { DepartmentService } from '../department.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks:Task[];
  employees:Employee[];
  departments:Department[];
  panelTitle: string;
  task: Task = {
    id: null,
  department_id: null,
  name: null,
  employees:null, 
  due_date: null,
  };
  searchTerm:string;
 

  constructor(private taskService: TasksService,private _route: ActivatedRoute,private _employeeService: EmployeeService,private departmentService: DepartmentService) { }
  
  ngOnInit() {
       this.getTasks();

    this._employeeService.getEmployees().subscribe(emp =>this.employees = emp);
    this.departmentService.getDepartments().subscribe(departments =>this.departments = departments);

      this._route.paramMap.subscribe(parameterMap => {
        const id = +parameterMap.get('id');
        this.getTask(id);
      });
    }
    private getTask(id: number) {
      if (id === 0) {
        this.task = {
          id: null, department_id: null, name: null,
          employees: null, due_date: null
  
        };
        // this.createEmployeeForm.reset();
        this.panelTitle = 'Create Task';
      } else {
        this.taskService.getTask(id).subscribe(
          (task) => { this.task = task; },
          (err: any) => console.log(err)
        );
        this.panelTitle = 'Edit Task';
      }
    }
  
    
    getTasks(): void {
      this.taskService.getTasks()
          .subscribe(tasks => this.tasks = tasks);
    }

    // addTask(departmentId: string,name:string,due_date:string): void {
    //   name = name.trim();
    //   if (!name) { return; }
    //   this.taskService.addTask({ name,importancy,assignedEmpName,deadline,department } as Task)
    //     .subscribe(task => {
    //       this.tasks.push(task);
    //     });
    // }
    
    delete(task: Task): void {
      // this.tasks = this.tasks.filter(t => t !== task);
      this.taskService.deleteTask(task.id).subscribe(
        () => console.log(`Employee with ID = ${this.task.id} Deleted`),
        (err) => console.log(err),()=> this.ngOnInit()
      );
   
    }
    
    saveTask(taskForm: NgForm): void {

  

        this.taskService.addTask(this.task).subscribe(
          (data: Task) => {
            // log the task object after the post is completed
            console.log(data);
            // empForm.reset();
            // this._router.navigate(['list']);
          },
          (error: any) => { console.log(error); }, ()=>this.ngOnInit()
        );
      
        
      
  
  
    }
 

  }


