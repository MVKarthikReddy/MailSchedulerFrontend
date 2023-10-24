import {useState,useEffect} from 'react'
import axios from 'axios';
import '../styles/settings.css'
import { useNavigate } from 'react-router-dom';
const SettingsPage = () => {
    const [details,setDetails] = useState([])
    const [open,setOpen] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]:e.target.value})
    }
    const fetchDetails = async () => {
        console.log(details)
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
                console.log(res.data)
                setDetails(res.data)
                setOpen(true)
            })

        console.log(details.username)
        } catch (error) {
          console.log('Error fetching schedules:', error);
        }
      };

      useEffect(() => {
    
        fetchDetails()

    }, []);

  return (
    <div className='settings-page'>
        <div className='gap'></div>
        <div className='settings-img'>
            <img src='https://cdn3d.iconscout.com/3d/premium/thumb/profile-6335655-5220669.png?f=webp' alt='no img' />
        </div>
        <div className='settings-user-details'>
            <div className='setting-profile-field'>
                <label>Username</label>
                <input type='text' placeholder='enter username' name='username' value={details.username} onChange={(e) => {handleChange(e)}}/>
            </div>
            <div className='setting-profile-field'>
                <label>Email</label>
                <input type='text' placeholder='enter email' name='email' value={details.email}  onChange={(e) => {handleChange(e)}}/>
            </div>
        </div>
        <div className='setting-buttons-con'>
            { open &&
                <div className='setting-buttons'>
                    <button>Recover Password</button>
                    <button onSubmit={(e) => {
                        e.preventDefault()
                        navigate('/')
                        }}>
                        Update Details
                    </button>
                </div>
            }
            { !open &&
                <div className='setting-buttons'>
                    <button onClick={() => {
                        navigate('/')
                        window.location.reload()
                    }}>
                        Log In
                    </button>
                    <button onClick={() => {navigate('/register')}}>Sign Up</button>
                </div>
            }
            
        </div>
    </div>
  )
}

export default SettingsPage