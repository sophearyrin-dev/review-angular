import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) avatar!: string;
  @Input() name!: string;

  onSelectUser(){

  }
    

}
