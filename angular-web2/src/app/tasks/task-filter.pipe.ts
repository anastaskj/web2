import { PipeTransform, Pipe } from '@angular/core';
import { Task } from './task';

@Pipe({
    name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
    transform(tasks: Task[], searchTerm: string): Task[] {
        if (!tasks || !searchTerm) {
            return tasks;
        }

        return tasks.filter(task =>
            task.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}