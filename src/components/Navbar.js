import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom'
import { Login } from "./authentication/Login";
import ProfilePage from "./ProfilePage";


export default function Navbar() {

	const [menuOpen,setMenuOpen] = useState(false)
	const [open,setOpen] = useState(false)
    const navigate = useNavigate()

	const updateMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<div className="navbar">
			<header className="nav-header">
				<div className="nav-logo">
					<h2>MailScheduler</h2>
				</div>
	
				
					<div className="nav-items-container" >
						<ul className={menuOpen?"nav-items burger-items":"nav-items"}>
							<li onClick={
								() => navigate('/home')
							}>
								Home
							</li>
							<li onClick={
								() => navigate('/schedules')
							}>
								schedules
							</li>
							<li onClick={
								() => navigate('/settings')
							}>
								settings
							</li>
						</ul>
					</div>
					<div className="nav-profile-container">
						<ul className={menuOpen?"nav-profile burger-profile":"nav-profile"}>
							<li>
								<CgProfile className="profile" onClick={() => {setOpen(!open)}}/>
							</li>
						</ul>
					</div>
				
				<div className="menu-container">
					{menuOpen?<FaTimes onClick={updateMenu} className="burger-icon"/>:<FaBars onClick={updateMenu} className="cross-icon"/>}
				</div>
			</header>
			{ open && <ProfilePage />}
		</div>
	);
}