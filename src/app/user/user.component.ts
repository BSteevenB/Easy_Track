import { Component, EventEmitter, Input, Output, input, output } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
import { type User } from "./user.model";
import { NgClass } from "@angular/common";
// type User = {
//     id: string;
//     name: string;
//     avatar: string;
// }

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})


export class UserComponent {
    // @Input({required: true}) id: string = '';
    // id = input.required<string>();
    //@Input({required: true}) user_name: string = '';
    @Input({required: true}) user!: User;
    @Input() selectedUserId!: any;
    @Output() select = new EventEmitter();
    selectedUser: string = '';
    // select = output<string>()
    //  private selectedUser = DUMMY_USERS[randomIndex]
    constructor() {
    
    }

    get imagePath() {
        return "assets/users/" + this.user.avatar;
    }

    onSelectUser() {
      //  this.selectedUser = this.user.id;
        this.select.emit(this.user.id)
        console.log(this.selectedUserId)

    }

}