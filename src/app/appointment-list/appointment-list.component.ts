import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  appointmentTitle:string = "";
  appointmentDate: Date = new Date();

  appointment: Appointment[] = [
    { id: 1, title: 'Meeting', date: new Date('2022-01-01') },
    { id: 2, title: 'Conference', date: new Date('2022-01-05') },
    { id: 3, title: 'Lunch', date: new Date('2022-01-10') }
  ];

  addAppointment() {
    if (this.appointmentTitle && this.appointmentDate) {  // Ensure values are provided
      const newAppointment: Appointment = {
        id: this.appointment.length + 1,
        title: this.appointmentTitle,
        date: this.appointmentDate
      };
      this.appointment.push(newAppointment);
  
      // Optionally, clear input fields after adding the appointment
      this.appointmentTitle = '';
      this.appointmentDate = new Date();
    } else {
      console.error('Appointment title and date are required.');
    }
  }

  deleteAppointment(index:number){
    this.appointment.splice(index, 1);  // Remove the appointment from the array
  }
  

}
