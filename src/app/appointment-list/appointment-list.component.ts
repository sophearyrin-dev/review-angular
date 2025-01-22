import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{


  appointmentTitle:string = "";
  appointmentDate: Date = new Date();

  ngOnInit(): void {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      this.appointment = JSON.parse(storedAppointments);
    }
  }

  appointment: Appointment[] = [];

  

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

      localStorage.setItem("appointments", JSON.stringify(this.appointment));
    } else {
      console.error('Appointment title and date are required.');
    }
  }

  deleteAppointment(index:number){
    this.appointment.splice(index, 1);  // Remove the appointment from the array
    localStorage.setItem("appointments", JSON.stringify(this.appointment));
  }
  

}
