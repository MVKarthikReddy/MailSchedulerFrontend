import React, { useState } from 'react'
import '../styles/footer.css'
import axios from 'axios'
export const Footer = () => {

    const [comment,setComment] = useState("")


    const postComment = async () => {
        console.log(comment)
        const token = localStorage.getItem('token')
        if(comment)
        {
            await axios.post(
                "https://mailschedulerbackendservice.onrender.com/api/comments/",
                {
                    comment:comment,
                },
                {
                    headers : { 
                        Authorization : `Bearer ${token}` 
                    }
                }
            ).then((res) => {
    
                console.log(res.data)
            })
        }
        setComment("")
    }
  return (
    <div className='footer-con'>
        <div className='feedback-con' >
            <textarea className='feedback-area' name='comment' value={comment} placeholder='Leave a comment on my work' onChange={(e) => {setComment(e.target.value)}}></textarea>
            <button style={{width:'100px'}} onClick={() => {postComment()}}>submit</button>
        </div>
        <div className='footer-title'>
            <label><span>MailScheduler </span>: Always with you to save your time</label>
        </div><div className='horizontal'><hr></hr></div>
        <div className='footer-features'>
            <div className='about-us feat'>
                <h3>About Us</h3>
                <div className='list-items'>
                    <label>Aim</label>
                    <label>Vision</label>
                </div>
                
            </div>
            <div className='services feat'>
                <h3>Services</h3>
                <div className='list-items'>
                    <label>Schedule Mails</label>
                   
                </div>
            </div>
            <div className='contact-us feat'>
                <h3>Contact Us</h3>
                <div className='list-items'>
                    <label>Mail:</label> karthikmedagam@gmail.com
                    <label>Ph Num:</label> +91 9182305651
                    <label>Address:</label> Guntur,Andhra Pradesh
                </div>
            </div>
            <div className='social-media feat'>
                <h3>Social Media</h3>
                <div className='list-items'>
                    <label>GitHub</label>
                    <label>LinkedIn</label>
                    <label>Instagram</label>
                </div>
            </div>
        </div>

    </div>
  )
}
