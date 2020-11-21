import React from 'react'
import { Link } from 'react-router-dom';
import '../../../css/layout/side-menu.css';


const SideMenu = ({isOpen, handleMenu, logout, isAuthenticated}) =>{

    return (
        <div className={isOpen? "sidemenu sidemenu-open": "sidemenu"}>
            <div className="nav-wrap">
                <div className="brand-logo">
                    <img src="/img/logo.png"alt="GadgeAcademia"/>
                </div>
                <hr></hr>
                <ul className={isOpen? "open" : ""}>
                    {
                        isAuthenticated
                        ?<>
                        <li><Link className="text-info" to="/profile">Profile</Link></li>
                        <li><Link className="text-info" to="/my-courses">My Courses</Link></li>
                        <li><Link className="text-info" onClick={logout}>Logout</Link></li>
                        </>
                        :<>
                        <li><Link className="text-info" to="/login">Login</Link></li>
                        </>
                    }
                </ul>
                <hr></hr>
                <ul className={isOpen? "open" : ""}>
                    <li><Link className="text-info" to="/about">About US</Link></li>
                    <li><Link className="text-info" to="/contact">Contact US</Link></li>
                </ul>
            </div>
            <div className="overlay" onClick={handleMenu}>
                <i className="fas fa-times-circle close-nav text-white" onClick={handleMenu}></i>
            </div>
        </div>
    )
}

export default SideMenu
