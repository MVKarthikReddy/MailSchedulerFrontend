import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Register } from './components/authentication/Register';
import Navbar from './components/Navbar';
import '../src/styles/navbar.css'
import HomePage from './components/HomePage';
import { Login } from './components/authentication/Login';
import Schedules from './components/Schedules';
import { Footer } from './components/Footer';
import SettingsPage from './components/SettingsPage';


const login = () => {
  return(
    <div>
      <Navbar />
      <Login />
    </div>
  )
}

const register = () => {
  return(
    <div>
      <Navbar />
      <Register />
    </div>
  )
}

const home = () => {
  return(
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

const schedules = () => {
  return(
    <div>
      <Navbar />
      <Schedules />
      {/* <Footer /> */}
    </div>
  )
}

const settings = () => {
  return(
    <div>
      <Navbar />
      <SettingsPage />
      {/* <Footer /> */}
    </div>
  )
}

function App() {



  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={login()}/>
            <Route path='/register' element={register()} />
            <Route path='/settings' element={settings()}/>
            <Route path='/schedules' element={schedules()}/> 
            <Route path='/home' element={home()}/> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
