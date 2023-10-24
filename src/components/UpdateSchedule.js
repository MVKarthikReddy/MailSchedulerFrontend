import {useState} from 'react'
import '../styles/schedule.css'
import { RxCrossCircled } from 'react-icons/rx'
import axios from 'axios'



function UpdateSchedule({open,setOpen,schedule}) {

    const [details,setDetails] = useState(schedule)


    const scheduleMail = () => {

        const token = localStorage.getItem('token')
        axios.put(
            `https://mailschedulerbackendservice.onrender.com/api/schedule/${schedule._id}`,
             details,
            {
                headers : { 
                    Authorization : `Bearer ${token}` 
                }
            }
        ).then((res) => {
            alert("Schedule successfully updated")
            window.location.reload()
            // console.log(res.data)
        })

    }

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]:e.target.value})
    }


  return (
    <div className='todo-container'>
        <form className='schedule-form' onSubmit={scheduleMail} style={{width:'96%'}}>
                <div className='schedule-container'>
                    <div className='schedule-header'>Update Your Mail</div>
                    <div className='schedule-body'>
                        <div className='schedule-field'>
                            <label>From<span>*</span></label>
                            <input type='text' placeholder='enter from address' name='from' value={details.from} onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className='schedule-field'>
                            <label>To<span>*</span></label>
                            <input type='text' placeholder='enter to address' name='to' value={details.to} onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className='schedule-field'>
                            <label>Cc</label>
                            <input type='text' placeholder='enter cc' name='cc' value={details.cc} onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className='schedule-field'>
                            <label>Bcc</label>
                            <input type='text' placeholder='enter bcc' name='bcc' value={details.bcc} onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className='schedule-field'>
                            <label>Subject<span>*</span></label>
                            <input type='text' placeholder='enter subject' name='subject' value={details.subject} onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className='schedule-field textarea'>
                            <label>Body<span>*</span></label>
                            <textarea type='text' placeholder='enter body of the mail' name='body' value={details.body} onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className='schedule-field'>
                            <label>Schedule Date<span>*</span></label>
                            <input type='date' placeholder='enter schedule date' name='date' value={details.date} onChange={(e) => {handleChange(e)}}/>
                        </div>
                        <div className='schedule-field'>
                            <label>Schedule Time<span>*</span></label>
                            <input type='time' placeholder='enter schedule time' name='time' value={details.time} onChange={(e) => {handleChange(e)}}/>
                        </div>
                    </div>
                    <div className='schedule-button'>
                        <button type='submit' onClick={() => {scheduleMail()}}>Update</button>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default UpdateSchedule