import React, {useState} from 'react';
import '../auth.css';
import { ToastContainer, toast } from 'react-toastify';
const signuppage = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const backendApiUrl = 'http://localhost:8000';

    const handleSignup = async () => {
        try{
        const response = await fetch(`${backendApiUrl}/admin/register`,{
            method : 'post',
            headers : {
                'content-type' : 'application/json',
            },
            body: JSON.stringify({name, email, password}),
            credentials : 'include'
        })
        const data = await response.json();
        if(data.ok){
            const data = await response.json();
            console.log('Admin Registration Succesful', data);
            toast.success('Admin Registration Succesful', {
                position : toast.POSITION.TOP_CENTER,
            });
        }
        else{
            console.error('Admin Registration failed', data);
            toast.error('Admin Registration failed', {
                position : toast.POSITION.TOP_CENTER,
            });
        }
        }
        catch{
            console.error('error while  Registration ');
            toast.error('error  while Registration',eeror);
        }
    }

    return(
        <div className='formpage'>
        <input 
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />
          <input 
        type="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        />
          <input 
        type="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleSignup}>Signup</button>
        </div>
    )
}


export default signuppage;