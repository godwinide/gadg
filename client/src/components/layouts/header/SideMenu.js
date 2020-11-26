import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../../css/layout/side-menu.css';


const SideMenu = ({isOpen, handleMenu, logout, isAuthenticated}) =>{
    return (
        <div className={isOpen? "sidemenu sidemenu-open": "sidemenu"}>
            <div className="nav-wrap">
                <div className="brand-logo">
                    <NavLink exact to="/">
                        <img src="/img/logo.png"alt="GadgeAcademia"/>
                    </NavLink>
                </div>
                <hr></hr>
                <div className="side-links">
                <ul className={isOpen? "open" : ""}>
                    {
                        isAuthenticated
                        ?<>
                        <li><NavLink onClick={handleMenu} className="text-info" to="/profile">
                            <i className="fas fa-user"></i>{" "}
                            Profile</NavLink></li>
                        <li><NavLink onClick={handleMenu} className="text-info" to="/my-courses">
                            <i className="far fa-play-circle"></i>{" "}
                            My Courses</NavLink></li>
                        <li className="text-info btn btn-secondary mr-4 logout-btn" onClick={()=>{logout(); handleMenu();}}>
                            Logout{" "}
                            <i className="fas fa-arrow-alt-right"></i>
                        </li>
                        </>
                        :<>
                        <li><NavLink onClick={handleMenu} className="text-info" to="/login">Login</NavLink></li>
                        <li><NavLink onClick={handleMenu} className="text-info" to="/login">Signup</NavLink></li>
                        </>
                    }
                </ul>
                <hr></hr>
                <ul className={isOpen? "open" : ""}>
                    <li><NavLink onClick={handleMenu} className="text-info" to="/">
                        <i className="far fa-home"></i>{" "}
                        Home</NavLink></li>
                    <li><NavLink onClick={handleMenu} className="text-info" to="/about">
                        <i className="fal fa-info-circle"></i>{" "}
                        About US</NavLink></li>
                    <li><NavLink onClick={handleMenu} className="text-info" to="/contact">
                        <i className="fas fa-phone"></i>{" "}
                         Contact US</NavLink></li>
                </ul>
                </div>
            </div>
            <div className="overlay" onClick={handleMenu}>
                <i className="fas fa-times-circle close-nav text-white" onClick={handleMenu}></i>
            </div>
        </div>
    )
}

export default SideMenu
