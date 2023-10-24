import React, { useState,useEffect } from 'react'
import '../styles/profile.css'
import axios from 'axios'
import SettingsPage from './SettingsPage'
import { useNavigate } from 'react-router-dom'
const ProfilePage = () => {

    const [open,setOpen] = useState(true)
    const [isOpen,setIsOpen] = useState(false)
    const [details,setDetails] = useState()
    const navigate = useNavigate()

    const fetchDetails = async () => {
        try {
          const token = localStorage.getItem('token')
          await axios.get(
            'https://mailschedulerbackendservice.onrender.com/api/users/',
            {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            }
            ).then((res) => {
                // console.log(res.data)
                setDetails(res.data)
                if(!details)
                {
                    setOpen(false)
                }
                
            })

        // console.log(details)
        } catch (error) {
          console.log('Error fetching schedules:', error);
        }
      };

      useEffect(() => {
    
        fetchDetails()

    }, []);

    if(!details)
    {
        return(
            <div className='profile-page'>
                <div className='profile-img'>
                    <img src='https://cdn3d.iconscout.com/3d/premium/thumb/profile-6335655-5220669.png?f=webp' alt='no img' />
                </div>
                <div className='profile-page-con'>
                    Loading...
                </div>
                <div className='profile-auth'>
                    {
                        open && <div className='profile-login'>
                                    <button className='profile-but' onClick={() => {
                                        navigate('/register')
                                        window.location.reload();

                                        }}>
                                        Sign Up
                                    </button>
                                    <button className='profile-but' onClick={() => {
                                        navigate('/')
                                        window.location.reload();

                                        }}>
                                        Log In
                                    </button>
                                </div>
                    }
                    {
                        !open && <div className='profile-logout'>
                                    <button className='profile-but'>Log Out</button>
                                 </div>
                    }
                </div>
            </div>
        )
    }
        return (
            <div className='profile-page'>
                <div className='profile-img'>
                    <img src='https://cdn3d.iconscout.com/3d/premium/thumb/profile-6335655-5220669.png?f=webp' alt='no img' />
                </div>
                {
                    <div className='profile-page-con'>
                        {/* <hr style={{width:'250px'}}></hr> */}
                        <div className='profile-details'>
                            <label style={{color:'white'}}>User Name : </label><label>{details.username}</label><br></br><br></br>
                            <label style={{color:'white'}}>User Email : </label><label>{details.email}</label>
                        </div>
                    </div>
                    
                }
                <div className='profile-auth'>
                    {
                        open && <div className='profile-login'>
                                    <button className='profile-but'>Sign Up</button>
                                    <button className='profile-but'>Log In</button>
                                </div>
                    }
                    {
                        !open && <div className='profile-logout'>
                                    <button className='profile-but' onClick={() => {
                                            localStorage.removeItem('token')
                                            navigate('/')
                                            window.location.reload();
                                        
                                        }}>
                                        Log Out
                                    </button>
                                 </div>
                    }
                    
                </div>
            </div>
          )
    
}

export default ProfilePage