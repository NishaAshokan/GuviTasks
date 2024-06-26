import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Admin Registered Successfully', data);
        toast.success('Admin registered successfully', {
          position: 'top-center',
        });
      } else {
        console.error('Admin registration failed:', response.statusText);
        toast.error('Registration failed', {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Error on registration:', error);
      toast.error('Error on registration', {
        position: 'top-center',
      });
    }
  };

  return (
    <div className='formpage'>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign up</button>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;