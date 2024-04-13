import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './AuthPopup.css'
//import Image from 'next/image'
import logo from '../../assets/logo.png'
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
//import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
//import dayjs from 'dayjs';

//
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import { ToastContainer, toast } from 'react-toastify';

// interface AuthPopupProps {
//     setShowpopup: React.Dispatch<React.SetStateAction<boolean>>;
// }
 

const AuthPopup = ({ setShowpopup }) => {
    // State initialization
    const [showSignup, setShowSignup] = useState(false);
    const [signupformData, setSignupFormData] = useState({
        name: '',
        email: '',
        password: '',
        weightInKg: 0.0,
        heightInCm: 0.0,
        goal: '',
        gender: '',
        dob: new Date(),
        activityLevel: ''
    });
        
  
    
    
    const [loginformData, setLoginFormData] = useState({
        email: '',
        password: '',
    })

 


    const backendApiUrl = 'http://localhost:7800';

    const handleLogin = () => {
        console.log(loginformData);

        fetch(backendApiUrl + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginformData),
            credentials: 'include'
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.ok) {
                    toast.success(data.message)

                    setShowpopup(false)
                }
                else {
                    toast.error(data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }
   
    const handleSignup = () => {
        // console.log(process.env.NEXT_PUBLIC_BACKEND_API);

        fetch(backendApiUrl + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupformData),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.ok) {
                    toast.success(data.message)

                    setShowSignup(false)
                }
                else {
                    toast.error(data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='popup'>
            <button className='close'
                onClick={() => {
                    setShowpopup(false)
                }}
            >
                <AiOutlineClose />
            </button>
            {
                showSignup ? (
                    <div className='authform'>

                        <div className='left'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className='right'>
                            <h1>Signup to become a freak</h1>
                            <form action="">
                                <Input
                                    color="warning"
                                    placeholder="name"
                                    size="lg"
                                    variant="solid"
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            name: e.target.value
                                        })
                                    }}
                                />
                                <Input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"

                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            email: e.target.value
                                        })
                                    }}
                                />
                                <Input
                                    color="warning"
                                    placeholder="password"
                                    size="lg"
                                    variant="solid"
                                    type='password'

                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            password: e.target.value
                                        })
                                    }}
                                />


                                <Input color="warning" size="lg" variant="solid" type="number" placeholder='Weight in kg'
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            weightInKg: parseFloat(e.target.value)
                                        })
                                    }}
                                />

<Select
    color="warning"
    placeholder="Activity Level"
    size="lg"
    variant="solid"
    onChange={(event) => {
        const newValue = event.target.value;
        setSignupFormData({
            ...signupformData,
            activityLevel: newValue || ''
        });
    }}
>
    

                                    <Option value="sedentary">Sedentary</Option>
                                    <Option value="light">Light</Option>
                                    <Option value="moderate">Moderate</Option>
                                    <Option value="active">Active</Option>
                                    <Option value="veryActive">Very Active</Option>
                                </Select>

                                <Select
    color="warning"
    placeholder="Goal"
    size="lg"
    variant="solid"
    onChange={(event) => {
        const newValue = event.target.value;
        setSignupFormData({
            ...signupformData,
            goal: newValue || ''
        });
    }}
>
    <option value="weightLoss">Lose</option>
    <option value="weightMaintain">Maintain</option>
    <option value="weightGain">Gain</option>
</Select>


<Select
    color="warning"
    placeholder="Gender"
    size="lg"
    variant="solid"
    onChange={(event) => {
        const newValue = event.target.value;
        setSignupFormData({
            ...signupformData,
            gender: newValue || ''
        });
    }}
>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
</Select>


                                <label htmlFor="">Height</label>


                                <Input color="warning" size="lg" variant="solid" type="number" placeholder='cm'
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            heightInCm: parseFloat(e.target.value)
                                        })
                                    }}
                                />


                                <label htmlFor="">Date of Birth</label>
                                import { DatePicker } from '@mui/lab';

<LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
        defaultValue={new Date()}
        onChange={(newValue) => {
            setSignupFormData({
                ...signupformData,
                dob: newValue || null
            });
        }}
        renderInput={(params) => <TextField {...params} />}
    />
</LocalizationProvider>


                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSignup()
                                    }}
                                >Signup</button>
                            </form>
                            <p>Already have an account?  <button onClick={() => {
                                setShowSignup(false)
                            }}>Login</button></p>
                        </div>

                    </div>
                ) : (
                    <div className='authform'>
                        <div className='left'>
                            <Image src={logo} alt="Logo" />
                        </div>
                        <div className='right'>
                            <h1>Login to become a freak</h1>
                            <form action="">
                                <Input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"
                                    onChange={(e) => {
                                        setLoginFormData({
                                            ...loginformData,
                                            email: e.target.value
                                        })
                                    }}
                                />

                                <Input
                                    color="warning"
                                    placeholder="password"
                                    size="lg"
                                    variant="solid"
                                    type='password'

                                    onChange={(e) => {
                                        setLoginFormData({
                                            ...loginformData,
                                            password: e.target.value
                                        })
                                    }}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleLogin()
                                    }}
                                >Login</button>
                            </form>
                            <p>Don't have an account?  <button onClick={() => {
                                setShowSignup(true)
                            }}>Signup</button></p>
                        </div>

                    </div>
                )
            }
        </div>
    )
}
AuthPopup.propTypes = {
    setShowpopup: PropTypes.func.isRequired,
  };

export default AuthPopup

