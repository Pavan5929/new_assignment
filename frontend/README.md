# User Registration Frontend (React)

This project contains the frontend application for a User Registration system. The frontend communicates with a backend API to perform CRUD (Create, Read, Update, Delete) operations on user data.

The following actions are available in this application:

- **View Users**: Displays a list of all registered users.
- **Add User**: Allows users to add a new user with `Name`, `Email`, and `Date of Birth`.
- **Update User**: Allows updating the information of an existing user.
- **Delete User**: Allows deleting a user from the list.

## Requirements

- **Node.js** (version 14 or above)
- **npm** (Node package manager)

## Installation Steps

### 1. Clone the Repository

git clone https://github.com/yourusername/yourrepositoryname.git
cd yourrepositoryname

How the Application Works
Displaying Users: When the page loads, it fetches the list of registered users from the backend and displays them.
Adding a User: When the "Add User" button is clicked, a new user is added using the form fields (Name, Email, DOB), and the user list is refreshed.
Editing a User: When the "Edit" button is clicked next to a user, the user’s information is populated into the form, and the button will change to "Update User".
Deleting a User: The "Delete" button next to each user allows removing the user from the system.

API Integration
The frontend makes the following API requests to the backend:

GET /users: Fetch all users.
POST /users: Create a new user (with Name, Email, DOB).
PUT /users/:email: Update an existing user's details by email.
DELETE /users/:email: Delete a user by email.
