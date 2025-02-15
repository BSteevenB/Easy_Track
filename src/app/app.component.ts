import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
//import { CommonModule } from '@angular/common';
import { AppTasks } from './modules/app-tasks/app-tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, AppTasks, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_1';
  user_data = DUMMY_USERS;
  selectedUserId?: string = this.user_data[0].id;
 // user_1 = DUMMY_USERS[0].name
  constructor() {
    
  }

  get selectedUser() {
    return this.user_data.find((user)=> user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
   // console.log(obj, 'e')
    this.selectedUserId = id;
  }
}
