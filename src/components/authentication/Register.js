import React, { useState } from 'react'
import '../../styles/login.css'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {

    const navigate = useNavigate()

    const [details,setDetails] = useState({
        username:"",
        email : "",
        password : "",
        confirmPass : ""
    })

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]:e.target.value})
    }

    const registerUser = (e) => {

        e.preventDefault();

        axios.post(
            'https://mailschedulerbackendservice.onrender.com/api/users/register/',
            details
        ).then((res) => {
            console.log(res.data)
            navigate('/')
        })
    }

  return (
    <div className='register-container'>
        <div className='login-con'>
            <div className='login-sender'>
                <img src='https://webstockreview.net/images/mail-clipart-sender-13.png' alt='No img' />
                {/* <label>We will deliver your mail's on time!</label> */}
            </div>
            <div className="wrapper">
                <h2>Register Now</h2>
                {/* <p>Are you ready<br></br> to get reminds!</p> */}
                <form onSubmit={registerUser}>
                    <input type='text' name='username' value={details.name} onChange={(e) => {handleChange(e)}} placeholder='enter your name'/><br/>
                    <input type='email' name='email' value={details.email} onChange={(e) => {handleChange(e)}} placeholder='enter email'/><br/>
                    <input type='password' name='password' value={details.password} onChange={(e) => {handleChange(e)}} placeholder='enter password'/><br/>
                    <input type='password' name='confirmPass' value={details.confirmPass} onChange={(e) => {handleChange(e)}} placeholder='confirm password'/><br/>

                    <button type='submit'>Sign Up</button>
                        
                </form>
                        
                <p className="or">
                ----- or continue with -----
                </p>
                <div className='icon'>
                    <div className="icons">
                        <FcGoogle/>
                    </div>
                </div>
                <div className="not-member">
                    Already registered? <span onClick={() => {navigate('/')}}>Login Now</span>
                </div>
                        
            </div>
            
        </div>
            
    </div>
  )
}
