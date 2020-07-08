import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import{ HttpHeaders} from '@angular/common/http';

// import { of } from 'rxjs';
// import { Observable, Subject, pipe, observable } from 'rxjs';
// import { map, takeUntil, tap } from 'rxjs/operators';
// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
     constructor(private _httpClient: HttpClient,private http: HttpClient){}
    public listEmployees: Employee[] = [
        // {
        //     id: 1,
        //     name: 'Mark',
        //     gender: 'Male',
        //     contactPreference: 'Email',
        //     email: 'mark@alten.com',
        //     dateOfBirth: new Date('10/25/1988'),
        //     department: '100001',
        //     isActive: true,
        //     photoPath: 'assets/images/mark.png'
        // },
        // {
        //     id: 2,
        //     name: 'Mary',
        //     gender: 'Female',
        //     contactPreference: 'Phone',
        //     phoneNumber: 2345978640,
        //     dateOfBirth: new Date('11/20/1979'),
        //     department: '100002',
        //     isActive: true,
        //     photoPath: 'assets/images/mary.png'
        // },
        // {
        //     id: 3,
        //     name: 'John',
        //     gender: 'Male',
        //     contactPreference: 'Phone',
        //     phoneNumber: 5432978640,
        //     dateOfBirth: new Date('3/25/1976'),
        //     department: '100003',
        //     isActive: false,
        //     photoPath: 'assets/images/john.png'
        // },
    ];
    // ngOnInit() {
    //     let obs = this.http.get('http://i875395.hera.fhict.nl/api/360236/employee')
    //     obs.subscribe(()=> console.log('Got it !!!!!!'));
    //     }

     baseUrl = "http://i875395.hera.fhict.nl/api/360236/employee";

    getEmployees(): Observable<Employee[]> {
        return this._httpClient.get<Employee[]>('http://i875395.hera.fhict.nl/api/360236/employee');
    }
    // When an update is peformed our server side service does not return anything
// So we have set the return type to void.

 updateEmployee(employee: Employee): Observable<void> {
    // We are using the put() method to issue a PUT request
    // We are using template literal syntax to build the url to which
    // the request must be issued. To the base URL we are appending
    // id of the employee we want to update. In addition to the URL,
    // we also pass the updated employee object, and Content-Type header
    // as parameters to the PUT method
    return this._httpClient.put<void>(`${this.baseUrl}?id=${employee.id}`, employee, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    })
    // .pipe(catchError(this.handleError));
}
   
    
    addEmployee(employee: Employee): Observable<Employee> {
        // if (employee.id === null) {
            // const maxId = this.listEmployees.reduce(function (e1, e2) {
            //     return (e1.id > e2.id) ? e1 : e2;
            // }).id;
            // employee.id = maxId + 1;
            // employee.id = 0;
    
            // this.listEmployees.push(employee);
            return this._httpClient.post<Employee>('http://i875395.hera.fhict.nl/api/360236/employee',
                employee, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                })
                // .pipe(catchError(this.handleError));
        // } else {
        //     const foundIndex =
        //         this.listEmployees.findIndex(e => e.id === employee.id);
    
        //     this.listEmployees[foundIndex] = employee;
        // }
    }
      
    getEmployee(id: number): Observable<Employee> {
        return this._httpClient.get<Employee>(`${this.baseUrl}?id=${id}`)
            // .pipe(catchError(this.handleError));
    }
    
    deleteEmployee(id: number): Observable<void> {
        return this._httpClient.delete<void>(`${this.baseUrl}?id=${id}`)
            // .pipe(catchError(this.handleError));
    }
}