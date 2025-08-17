
# Todo Management System

A full-stack web application for managing personal tasks (TODOs) with user authentication and role-based access. Built with React (frontend) and Spring Boot (backend).

## Features

- User registration and login
- Secure authentication (JWT, Basic Auth)
- Add, update, delete, and view TODOs
- Mark TODOs as complete/incomplete
- Role-based access (Admin/User)
- Responsive UI with React and Bootstrap

## Technologies Used

- **Frontend:** React, Vite, Bootstrap
- **Backend:** Spring Boot, Spring Security, JPA/Hibernate, MySQL

## Getting Started

### Prerequisites

- Node.js & npm
- Java 17+
- MySQL

### Installation

#### Backend
1. Clone the repository:
  ```sh
  git clone https://github.com/KHALID9029/Todo-Management-System.git
  ```
2. Navigate to `TO-DO_banckend/todo-management` and configure your MySQL database in `application.properties`.
3. Build and run the Spring Boot application:
  ```sh
  mvn spring-boot:run
  ```

#### Frontend
1. Navigate to `TO-DO_frontend/todo-ui`.
2. Install dependencies:
  ```sh
  npm install
  ```
3. Start the React app:
  ```sh
  npm run dev
  ```

### Usage

1. Register a new user or login.
2. Add, update, delete, and manage your TODOs.
3. Admins have access to all TODOs and can delete any TODO.
4. Users can manage their own TODOs.

## Project Structure

- `TO-DO_banckend/todo-management/` - Spring Boot backend
- `TO-DO_frontend/todo-ui/` - React frontend

## API Endpoints

- `/api/auth/register` - Register new user
- `/api/auth/login` - Login
- `/api/todos` - CRUD operations for TODOs

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Author

Khalid9029
