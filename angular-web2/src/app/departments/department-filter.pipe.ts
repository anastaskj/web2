import { PipeTransform, Pipe } from '@angular/core';
import { Department } from './department';

@Pipe({
    name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {
    transform(departments: Department[], searchTerm: string): Department[] {
        if (!departments || !searchTerm) {
            return departments;
        }

        return departments.filter(department =>
            department.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}