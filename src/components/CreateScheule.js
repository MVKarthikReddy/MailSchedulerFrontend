import axios from "axios"
import { useState } from "react"
import '../styles/createschedule.css'
const CreateSchedule = () => {
    const [details,setDetails] = useState({
        from:"",
        to : "",
        cc : "",
        bcc : "",
        subject : "",
        body : "",
        date: "",
        time : "",
    })

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]:e.target.value.toString()})
    }

    const scheduleMail = (e) => {
        e.preventDefault();
        console.log(details.date)
        const token = localStorage.getItem('token')
        const headers = { 'Authorization': `Bearer ${token}` };

        var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        // console.log(localStorage.getItem('token'))
        const {from,to,cc,bcc,subject,body,date,time} = details
        details.time = `${time}:00`

        if(from.match(regEmail) || to.match(regEmail) || subject=="" || body=="" || date=="" || time==""){

            alert("Enter valid details.")

        }
        else{

            axios.post(
                'https://mailschedulerbackendservice.onrender.com/api/schedules/',
                 details,
                {
                    headers : { 
                        Authorization : `Bearer ${token}`
                    }
                }
            ).then((res) => {
                alert("Schedule is Created successfully")
                window.location.reload()
            })
            
        }

    }
    return(
        
            <form className='schedule-form' onSubmit={scheduleMail}>
                <div className='schedule-container'>
                    <div className='schedule-header'>Schedule Your Mail</div>
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
                        <button type='submit'>Schedule</button>
                    </div>
                </div>
            </form>
        
    )
}
export default CreateSchedule
