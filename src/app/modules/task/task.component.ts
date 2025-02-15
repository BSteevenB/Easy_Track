import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Tasktype } from "./task.model";

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
})

export class Task {
    @Input() usertask!: Tasktype;
    @Output() complete = new EventEmitter<string>();

    ngOnInit(){
       
    }

    onComplete() {
        this.complete.emit(this.usertask.id)
    }
}