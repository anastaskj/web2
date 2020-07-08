import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { TaskFilterPipe } from './tasks/task-filter.pipe';
import { EmployeeService } from './employees/employee.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { DepartmentFilterPipe } from './departments/department-filter.pipe';
 
// import { EmployeeListResolverService } from './employees/employee-list-resolver.service';

const appRoutes: Routes = [
  {
    // path: 'list',
    // component: ListEmployeesComponent,
    // resolve: { employeeList: EmployeeListResolverService }
  },
  // other routes
];
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DepartmentsComponent,
    EmployeesComponent,
    TaskDetailComponent,
    DashboardComponent,
    MessagesComponent,
    DepartmentDetailComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeFilterPipe,
    TaskFilterPipe,
    DepartmentFilterPipe,
    EmployeeDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
 //   RouterModule.forRoot(appRoutes),
    AppRoutingModule
//     HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// )


  ],
   providers:[EmployeeService//,EmployeeListResolverService],
],bootstrap: [AppComponent]
})
export class AppModule { }
