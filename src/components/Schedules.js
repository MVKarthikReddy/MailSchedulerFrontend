import '../styles/schedule.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import UpdateSchedule from './UpdateSchedule';
import DeleteSchedule from './DeleteSchedule';
import ProfilePage from './ProfilePage';
const Schedules = () => {

    const [schedules, setSchedules] = useState([]);
    const [loading,setLoading] = useState(true)

    const [open,setOpen] = useState(false)
    const [del,setDel] = useState(false)



    const fetchSchedules = async () => {
        try {
          const token = localStorage.getItem('token')
          await axios.get(
            'https://mailschedulerbackendservice.onrender.com/api/schedules/',
            {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            }
            ).then((res) => {
                console.log(res.data.schedules)
                setSchedules(res.data.schedules)
                setLoading(false)
            })

        console.log(schedules)
        } catch (error) {
          console.log('Error fetching schedules:', error);
        }
      };

    useEffect(() => {
    
        fetchSchedules()

    }, []);



    if(loading && schedules==[])
    {
        // console.log("hello")
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    else{
        return (
            <div className='schedule-model'>
                <div className='gap'></div>
                
                    { 
                        schedules.map((schedule,index) => {
                            return(
                                <div key={index} className='schedule-con'>
                                    <div className='schedule-title'>
                                        <label>
                                            <span>From : </span>{schedule.from}
                                        </label>
                                        <label>
                                            <span>To : </span>{schedule.to}
                                        </label>
                                    </div>
                                    <div className='schedule-subject'>
                                        <label>
                                            <span>Subject : </span>{schedule.subject}
                                        </label>
                                    </div>
                                    <div className='schedule-time'>
                                        <label>
                                            <span>Schedule Date : </span>{schedule.date}
                                        </label>
                                        <label>
                                            <span>Schedule Time : </span>{schedule.time}
                                        </label>
                                    </div>
                                    <div className='schedule-update'>
                                        <button className='update-but' onClick={() => {setOpen(!open)}}>Update</button>
                                        <button className='delete-but' onClick={() => {setDel(!del)}}>Delete</button>
                                    </div>
                                    {
                                        open && <UpdateSchedule open={open} setOpen={setOpen} schedule={schedule}/>
                                    }
                                    {
                                        del && <DeleteSchedule del={del} setDel={setDel} schedule={schedule}/>
                                    }
                                </div>
                            )
                        })
                        
                    }
                    
                
            </div>
          )
    }
}

export default Schedules