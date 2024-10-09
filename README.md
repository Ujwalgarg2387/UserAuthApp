# Reactjs & Nodejs User Authentication with JWT and Password Reset

This project is a simple user authentication system built with **React**, **Node.js**, **Express**, and **MySQL**. It supports features like user registration, login, password reset, and JWT-based authentication. It also includes basic styling and routing with React Router.
This effective and simple user authentication system is built in such a way that it can be used in every project.

## Features

- **User Registration**: New users can register with their email and password.
- **User Login**: Users can log in with their email and password, receiving a JWT token upon successful authentication.
- **Password Reset**: Users can reset their password by providing their email and setting a new password.
- **JWT Token Authentication**: Authentication is handled through JSON Web Tokens (JWT).
- **Frontend**: A simple React UI with pages for login, password reset, and a home page after successful login.
- **Backend**: A RESTful API using Node.js and Express, with password hashing via bcrypt and database interactions using MySQL.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt.js
- **Routing**: React Router

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MySQL](https://www.mysql.com/) installed
- [Git](https://git-scm.com/) for version control

### Backend Setup

1. Clone this repository:

    ```bash
    git clone https://github.com/UjwalGarg2387/UserAuthApp.git
    cd UserAuthApp
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Set up your MySQL database:

    -Install Mysql
    - Open cmd and type `mysql -u root -p`
    - Enter root password you set while installing
    - Then type below commands:
    ```sql
    1) CREATE DATABASE AuthDb;
    2) USE AuthDb
    3) CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );
    ```

5. Configure the `.env` file:
    - JWT secret key will be obtained from jwt.io website
    ```bash
    JWT_SECRET=your_jwt_secret_key
    DB_HOST=localhost
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_NAME=your_database_name
    ```

6. Run the backend server:

    ```bash
    npm start
    ```

    The backend should now be running on `http://localhost:5000`.

### Frontend Setup

1. Move to the `frontend` directory:

    ```bash
    cd ../frontend
    npm install
    ```

2. Start the React development server:

    ```bash
    npm start
    ```

    The frontend should now be running on `http://localhost:3000`.

## Usage

- **Registration**: register a new user.
- **Login**: log in existing user.
- **Password Reset**: reset your password.
- **Logout**: Click the logout button on the home page to remove the JWT token and log out.

## API Endpoints

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Log in a user and generate a JWT token.
- **POST /api/users/reset-password**: Reset a user's password.

## Folder Structure

```bash
├── backend              # Node.js/Express API
│   ├── config           # MySQL database configuration
│   ├── controllers      # User controllers (registration, login, reset password)
│   ├── routes           # API routes
│   ├── .env             # Environment variables
│   └── server.js        # Entry point for the backend
├── frontend             # React.js front-end application
│   ├── src              # React components and pages
│   ├── public           # Public assets like HTML and CSS
│   └── .env             # Frontend environment variables
└── README.md            # This readme file
