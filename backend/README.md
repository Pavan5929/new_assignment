# Backend Setup for User Registration API

This repository contains the backend code for a User Registration application. It provides the following CRUD (Create, Read, Update, Delete) operations:

- **GET** `/users`: Get a list of all registered users.
- **POST** `/users`: Add a new user.
- **PUT** `/users/:email`: Update an existing user's information by email.
- **DELETE** `/users/:email`: Delete a user by email.

## Requirements

- **Node.js** (version 14 or above)
- **npm** (Node package manager)

## Installation Steps

Follow the steps below to set up and run the backend server on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/yourrepositoryname.git
cd yourrepositoryname
```

Install Dependencies
Run the following command to install the necessary dependencies:
npm install

This will install the required packages:

express: Web framework for Node.js.
cors: Middleware to enable Cross-Origin Resource Sharing.
body-parser: Middleware to parse incoming request bodies.

Start the Backend Server:
npm start

Backend running on port 5000

Test the API Endpoints
You can now test the API endpoints with tools like Postman or curl.

GET /users: Fetch all users.
POST /users: Create a new user. You need to send a JSON body with name, email, and dob fields.
PUT /users/:email: Update a user's details by email. Send a JSON body with the updated name and dob.
DELETE /users/:email: Delete a user by email
