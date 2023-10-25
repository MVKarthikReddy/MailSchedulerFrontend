import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import '../../styles/login.css'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Login = () => {

    const navigate = useNavigate()

    const [details,setDetails] = useState({
        email : "",
        password : "",
        
    })

    const handleChange = (e) => {
        setDetails({...details,[e.target.name]:e.target.value})
    }


    const signInUser = (e) => {
        e.preventDefault();

        if(details.email == "" && details.password=="")
        {
            alert("Enter all the details")
        }
        else{

            axios.post(
                'https://mailschedulerbackendservice.onrender.com/api/users/login/',
                 details
            ).then((res) => {
    
                if(res.data.msg)
                {
                    alert(res.data.msg)
                    navigate('/register')
                }
                else{
    
                    localStorage.setItem('token', (res.data.accessToken))
                    navigate('/home')
    
                }
                
            })

        }
        
    }

  return (
    <>
    
    <div className='register-container'>
          <div className="login-con">
                <div className='register-sender'>
                    {/* <img src='https://cdn.pixabay.com/photo/2015/11/03/09/06/at-1020063_960_720.jpg' alt='No img' /> */}
                    <img src='https://fg-a.com/email/2019-delivering-mail-transparent.png' alt='No img' />
                    <label>We will deliver your mail's on time!</label>
                </div>
                <div className='wrapper'>
                    <h2>Login Now</h2>
                    <p>save your time!</p>
                    <form onSubmit={signInUser}>
                        <input type='email' name='email' value={details.email} onChange={(e) => {handleChange(e)}} placeholder='enter email'/><br/>
                        <input type='password' name='password' value={details.password} onChange={(e) => {handleChange(e)}} placeholder='enter password'/><br/>
                        <p className="recover">
                            <a href="/">Recover Password</a>
                        </p>
                        <button type='submit'>Sign In</button>
                        
                    </form>
                    
                    <p className="or">
                        ----- or login with -----
                    </p>
                    <div className='icon'>
                        <div className="icons">
                            <FcGoogle/>
                        </div>
                    </div>
                    <div className="not-member">
                        Not a member? <span onClick={() => {navigate('/register')}}>Register Now</span>
                    </div>
                </div>
                        
            </div>
    </div>
    </>
  )
}
