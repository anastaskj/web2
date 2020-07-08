import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    transform(employees: Employee[], searchTermEmp: string): Employee[] {
        if (!employees || !searchTermEmp) {
            return employees;
        }

        return employees.filter(employee =>
            employee.first_name.toLowerCase().indexOf(searchTermEmp.toLowerCase()) !== -1);
    }
}
