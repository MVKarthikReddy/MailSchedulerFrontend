import {useState} from 'react'
import '../styles/homepage.css'
import axios from 'axios'
import WelcomePage from './WelcomePage'
import CreateSchedule from './CreateScheule'
function HomePage() {

    
    
  return (
    <div >
        <div className='home-gap'></div>
        <WelcomePage />
    </div>
  )
}

export default HomePage