import {useState} from 'react'
import '../styles/welcomepage.css'
import { useNavigate } from 'react-router-dom'
import CreateSchedule from './CreateScheule'
function WelcomePage() {

    const [open,setOpen]  = useState(false)
    const navigate = useNavigate()

  return (
    <div className='welcome-page'>
        <div className='welcome-page-con'>
                <p>
                    Welcome to <span>MailScheduler</span>, your all-in-one solution for scheduling and sending emails exactly when you want. 
                    Whether you're managing a busy work schedule, organizing personal events, or simply striving for better email efficiency, our platform empowers you to take control of your email communication.
                    Come on, <span style={{cursor:'pointer'}} onClick={() => {navigate('/register')}}>Sign Up</span> and let us save your time.
                </p>
            
                <img src='https://lh5.googleusercontent.com/proxy/jnJE_lCIflxjWEBj6_5TWv2ezlcIcyahM5pL9s3Ay2fMQXEVqau7LtAiTe8ia8vEw8RswA_6x3zZnOatwSdP1hq6bTTJoLFRRrsZvArssaaX=w1200-h630-p-k-no-nu' alt='no img' />
                {/* <img src='https://purepng.com/public/uploads/large/purepng.com-mailboxmailboxletter-boxpostpublic-box-1701527947815nlr6o.png' alt='no img' /> */}
        </div>
        <div className='welcome-feat-con'>
            <label>Our Key Features:</label>
            <div className='welcome-feat'>
                <img src='https://cdn-icons-png.flaticon.com/512/3133/3133158.png' alt='no img' />
                <p>
                    <span>Scheduled Email Delivery:</span>
                     Tired of sending emails at inconvenient times? With <span>Mail Scheduler</span>, you can draft your emails and schedule them for precise delivery. 
                     Ensure that important messages reach your recipients when they're most likely to see and respond to them.
                </p>
            </div>
            <div className='welcome-feat'>
                <p>
                    <span>Time Zone Flexibility:</span> 
                    We understand that your recipients may be in different time zones. 
                    Our platform automatically adjusts email delivery times to match the recipient's local time, making global communication seamless.
                </p>
                <img src='https://p7.hiclipart.com/preview/201/61/257/flat-earth-world-clock-time-zone-earth-thumbnail.jpg' alt='no img' />
            </div>
            <div className='welcome-feat'>
                <img src='https://cdn.pixabay.com/photo/2014/04/03/00/41/people-309098_960_720.png' alt='no img' />
                <p>
                    <span>Recipient Segmentation:</span> 
                    Target specific groups with ease. 
                    Segment your email's list and send tailored messages to maximize engagement and relevance.
                </p>
            </div>
            <button onClick={() => {setOpen(!open)}}>Create a Schedule</button>
        </div>
        {
            open && <CreateSchedule />
        }
        <div className='why-feat-con'>
            <label>Why Choose MailScheduler?</label>
            <div className='why-feat'>
                <p>
                    <span>User-Friendly Interface: </span>
                    Our intuitive platform is designed for both beginners and email pros. 
                    You don't need to be a tech wizard to schedule emails like a pro.
                </p>
                <img src='https://f.hubspotusercontent40.net/hubfs/90848/AdobeStock_246626394.jpeg' alt='no img'/>
            </div>
            <div className='why-feat'>
                <img src='https://media.springernature.com/original/springer-static/image/art:10.1007%2Fs38311-017-0152-7/MediaObjects/38311_2017_152_Fig1_HTML.jpg' alt='no img'/>
                <p>
                    <span>Reliability and Security: </span>
                    We prioritize the security of your data and the reliability of our service. 
                    Your information is safe with us.
                </p>
            </div>
            <div className='why-feat'>
                <p>
                    <span>Exceptional Support: </span>
                    Have questions or need assistance? I am here to help you with any inquiries or technical issues.
                </p>
                <img src='https://recipe.de/wp-content/uploads/AdobeStock_170263847_Support-scaled.jpg' alt='no img'/>
            </div>
        </div>

    </div>
  )
}

export default WelcomePage