
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { TasksComponent }      from './tasks/tasks.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { CommonModule } from '@angular/common';
import {DisplayEmployeeComponent} from './employees/display-employee.component';
import {EmployeeDetailsComponent} from './employees/employee-details.component';
// import { EmployeeListResolverService } from './employees/employee-list-resolver.service';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'department/:id', component: DepartmentDetailComponent },
  { path: 'list', component: ListEmployeesComponent//,resolve: { employeeList: EmployeeListResolverService }},
},{ path: 'list/edit/:id', component: CreateEmployeeComponent },
  { path: 'list/employees/:id', component: EmployeeDetailsComponent }

  

 
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }




