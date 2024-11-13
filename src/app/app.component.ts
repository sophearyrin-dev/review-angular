import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  constructor(){
    console.log('loginning');

    let nums = [1,2,3,4,5,6,7];
    console.log(nums.filter(n => n>3));
    console.log(nums.find(n => n==3));
    console.log(nums.reduce(
      (sum,cur) => sum+cur
    ));

    enum Color {RED, GREEN, YELLOW}

    console.log(Color.RED);
    
    
    
    
  }
  
}
