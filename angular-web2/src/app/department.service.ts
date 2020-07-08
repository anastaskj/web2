import { Injectable } from '@angular/core';
import { Department } from './departments/department';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private departmentsUrl = 'api/departments'; 
baseUrl='http://i875395.hera.fhict.nl/api/360236/department';

  constructor(
  private http: HttpClient,private _httpClient:HttpClient
  ) { }


 getDepartments (): Observable<Department[]> {
  return this.http.get<Department[]>(this.baseUrl);
}


getDepartment(id: number): Observable<Department> {
  return this._httpClient.get<Department>(`${this.baseUrl}?id=${id}`)

}

updateDepartment(department: Department): Observable<void> {
  return this._httpClient.put<void>(`${this.baseUrl}?id=${department.id}`, department, {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
})
}

addDepartment (department: Department): Observable<Department> {
  return this._httpClient.post<Department>('http://i875395.hera.fhict.nl/api/360236/department',
  department, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
}

deleteDepartment(id: number): Observable<void> {
  return this._httpClient.delete<void>(`${this.baseUrl}?id=${id}`);

}
}


