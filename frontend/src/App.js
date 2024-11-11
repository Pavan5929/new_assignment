import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [editingEmail, setEditingEmail] = useState(null); // State for tracking which user is being edited

  // Fetch data from the backend
  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/users");
    setData(response.data);
  };

  // Handle adding new user
  const addUser = async () => {
    if (name && email && dob) {
      const newUser = { name, email, dob };
      await Axios.post("http://localhost:5000/users", newUser);
      resetForm(); // Reset the form after adding
      getData(); // Refresh the user list
    } else {
      alert("All fields are required!");
    }
  };

  // Handle deleting a user
  const deleteUser = async (email) => {
    await Axios.delete(`http://localhost:5000/users/${email}`);
    getData(); // Refresh the user list
  };

  // Handle updating user
  const updateUser = async () => {
    if (name && email && dob) {
      const updatedUser = { name, email, dob };
      await Axios.put(`http://localhost:5000/users/${editingEmail}`, updatedUser);
      resetForm(); // Reset form and stop editing
      setEditingEmail(null);
      getData(); // Refresh the user list
    } else {
      alert("All fields are required!");
    }
  };

  // Set form values to edit a user
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setDob(user.dob);
    setEditingEmail(user.email); // Mark this user as the one being edited
  };

  // Reset form fields
  const resetForm = () => {
    setName('');
    setEmail('');
    setDob('');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>User Registration</h1>
      </div>

      <div className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {editingEmail ? (
          <button onClick={updateUser}>Update User</button>
        ) : (
          <button onClick={addUser}>Add User</button>
        )}
      </div>

      <div className="user-list">
        {data.map((user) => (
          <div className="user-item" key={user.email}>
            <span>{user.name} | {user.email} | {user.dob}</span>
            <div className="button-group">
              <button className="update-btn" onClick={() => editUser(user)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteUser(user.email)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <button className="add-user-btn" onClick={addUser}>Add New User</button>
    </div>
  );
}

export default App;
