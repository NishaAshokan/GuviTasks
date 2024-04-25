import React, { useState, useEffect } from 'react';
//import Image from 'next/image';
import { IoIosBody } from 'react-icons/io';
import { Link } from 'react-router-dom'
import AuthPopup from '../AuthPopup/AuthPopup';
import logo from '../../assets/logo.png';
//import {BrowserRouter} from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
    const [isloggedin, setIsloggedin] = useState(false);
    const [showpopup, setShowpopup] = useState(false);
    const backendApiUrl = 'http://localhost:8000';

    const checklogin = async () => {
        try {
            const res = await fetch(`${backendApiUrl}/auth/checklogin`, {
                method: 'POST',
                credentials: 'include',
            });
            const data = await res.json();
            setIsloggedin(data.ok);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        checklogin();
    }, [showpopup]);

    return (
        <nav>
            <img src={logo} alt="Logo" />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile"><IoIosBody /></Link>
            {isloggedin ?
                <button>Logout</button> :
                <button onClick={() => setShowpopup(true)}>Login</button>
            }
            {showpopup && <AuthPopup setShowpopup={setShowpopup} />}
            
        </nav>
    );
                 
   
};

// const Navbar = () => {
//     const [isloggedin, setIsloggedin] = useState(false);
//     const [showpopup, setShowpopup] = useState(false);
//     const backendApiUrl = 'http://localhost:7800';
//     const checklogin = async () => {
//         fetch(backendApiUrl + '/auth/checklogin', {
//             method: 'POST',
//             credentials: 'include',
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             setIsloggedin(data.ok);
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     };

    

//     useEffect(() => {
//         checklogin();
//     }, [showpopup]);

//     return (
        
//         <nav>
//             <img src={logo} alt="Logo" />
//             <Link href='/'>Home</Link>
//             <Link href='/about'>About</Link>
//             <Link href='/profile'><IoIosBody /></Link>
//             {isloggedin ?
//                 <button>Logout</button> :
//                 <button onClick={() => setShowpopup(true)}>Login</button>
//             }
//             {showpopup && <AuthPopup setShowpopup={setShowpopup} />}
//         </nav>
       
//     );
// };

export default Navbar;

// const checklogin = async () => {
    //     fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/checklogin', {
    //         method: 'POST',
    //         credentials: 'include',
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setIsloggedin(data.ok);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // };
