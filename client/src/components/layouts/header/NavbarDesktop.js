import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../../../css/layout/navbar-desktop.css';

const NavbarDesktop = ({pprop:{cart, logout, auth:{isAuthenticated, user}}}) => {
    return (
        <div className="header nav-desktop">
            <div className="nav-wrap">
            <Link to="/" className="brand-logo">
                <img src="/img/logo.png" alt="GadgAcademia"/>
            </Link>
            <div className="nav">
                {/* search */}
                <form className="form-inline" action="/search">
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-search"></i>
                        </div>
                        </div>
                        <input type="text" name="q" className="form-control"  placeholder="search for anything"/>
                    </div>
                </form>
                {/* nav links */}
                <ul className="nav-links">
                    {
                        isAuthenticated
                        ?<>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/my-courses">
                        <i className="far fa-play-circle"></i>{" "}
                        My Courses</NavLink>
                        <NavLink to="/cart" className="cart-i"><sup className="badge badge-danger">{cart.length}</sup><i className="far fa-shopping-cart"></i> Cart</NavLink>
                        <NavLink to="#" onClick={logout} className="btn btn-secondary">Logout</NavLink>
                        <NavLink to="/profile" className="avatar">
                            {user.firstname[0].toUpperCase() + user.lastname[0].toUpperCase()}
                        </NavLink></>
                        :<>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/cart" className="cart-i"><sup className="badge badge-danger">{cart.length}</sup><i className="far fa-shopping-cart"></i> Cart</NavLink>
                        <NavLink to="/signup" className="btn text-white s-action">Signup</NavLink>
                        <NavLink to="/login" className="btn btn-secondary text-white" style={{display:"flex", alignItems:"center"}}>Login
                            <i className="fas fa-arrow-alt-square-right" style={{marginTop:".2em", marginLeft:".1em"}}></i>
                        </NavLink></>
                    }
                </ul>
            </div>
            </div>
        </div>
    )
}

export default NavbarDesktop
