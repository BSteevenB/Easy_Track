import { Component, Input } from "@angular/core";
import { Tasks } from "../../tasklist";
import { Task } from "../task/task.component";
import { NgFor } from "@angular/common";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [Task, NgFor],
    templateUrl: './app-tasks.component.html',
    styleUrl: 'app-tasks.component.css'
})

export class AppTasks {
    @Input({required: true}) UserId: any
    @Input({required: true}) UserName!: string;
    //tasklist = Tasks;
    Tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ]
    filteredList!: any;
    constructor() {

    }

    get getUserSummary() {
        return this.Tasks.filter(val => val.userId.includes(this.UserId));
    }

    onComplete(id: string) {
      this.Tasks = this.Tasks.filter((task) => task.id !== id)
    }
   
}