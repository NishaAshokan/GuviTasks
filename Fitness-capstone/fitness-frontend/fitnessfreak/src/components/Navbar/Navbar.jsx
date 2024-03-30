import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosBody } from 'react-icons/io';
import Link from 'next/link';
import AuthPopup from '../AuthPopup/AuthPopup';
import logo from '@/assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isloggedin, setIsloggedin] = useState(false);
    const [showpopup, setShowpopup] = useState(false);

    const checklogin = async () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/checklogin', {
            method: 'POST',
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsloggedin(data.ok);
        })
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        checklogin();
    }, [showpopup]);

    return (
        <nav>
            <Image src={logo} alt="Logo" />
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/profile'><IoIosBody /></Link>
            {isloggedin ?
                <button>Logout</button> :
                <button onClick={() => setShowpopup(true)}>Login</button>
            }
            {showpopup && <AuthPopup setShowpopup={setShowpopup} />}
        </nav>
    );
};

export default Navbar;
