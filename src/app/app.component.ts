import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  users = DUMMY_USERS;
 
  //varabile
  title = "Testing";

  //Array
  myArray = [1, 2, 3, 4, 5];

  //function
  displayTitle() {
    return this.title;
  }
  
}
