import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('https://mock-api-bdg1.onrender.com/data');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async () => {
    try {
     // await axios.post('https://jsonplaceholder.typicode.com/users', formData);
     await axios.post('https://mock-api-bdg1.onrender.com/data', formData);
      setFormData({ name: '', email: '', phone: '' }); 
      getUsers(); 
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async (id, updatedUserData) => {
    try {
      await axios.put(`https://mock-api-bdg1.onrender.com/data/${id}`, updatedUserData);
      setEditingUser("");
      getUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    
      await axios.delete(`https://mock-api-bdg1.onrender.com/data/${id}`);
      getUsers(); 
   
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData(user);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(editingUser.id, formData);
    } 
    else {
      createUser();
    }
  };

  return (
    <div className="App">
      <h1>Users</h1>
      <UserForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
      <table> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
