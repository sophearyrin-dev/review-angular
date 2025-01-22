# Appointment Management Application
![image](https://github.com/user-attachments/assets/9f2a775d-6764-4ea0-a364-9d87104fb9f0)


This is a simple appointment management application built with Angular and Bootstrap. It allows users to create, view, and delete appointments. The application stores appointments in the browser's `localStorage` to persist data across page reloads.

## Features

- **Create New Appointment**:
  - Users can create new appointments by entering a title and selecting a date.
  - Form validation ensures that both fields are filled before adding an appointment.
  - The appointment information is stored in the browser's localStorage.

- **View Appointments**:
  - Appointments are displayed in a **responsive table** format with columns for the appointment ID, title, and date.
  - The appointments are retrieved from the localStorage and shown in the table.

- **Delete Appointment**:
  - Each appointment has a **delete button** that allows users to remove the appointment from the list.
  - The removed appointment is also deleted from localStorage to ensure consistency.

- **Responsive Design**:
  - The layout is designed to be fully responsive, using **Bootstrap** grid classes (`row`, `col`, etc.) to adjust for different screen sizes.
  - The form and table automatically adjust based on the screen size for better user experience.

- **Bootstrap Styling**:
  - The application uses **Bootstrap** for consistent and clean styling, including cards, forms, buttons, tables, and more.

- **Local Storage**:
  - Appointments are stored in **localStorage** to ensure that the data persists across page reloads.

## Technologies Used

- **Angular**: For building the frontend and managing dynamic data binding and form handling.
- **Bootstrap**: For styling and making the application responsive.
- **TypeScript**: For adding logic and data management.
- **LocalStorage**: For persisting data on the client side.
