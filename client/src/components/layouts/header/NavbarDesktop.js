import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
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
                <form className="form-inline">
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-search"></i>
                        </div>
                        </div>
                        <input type="text" className="form-control"  placeholder="search for anything"/>
                    </div>
                </form>
                {/* nav links */}
                <ul className="nav-links">
                    {
                        isAuthenticated
                        ?<>
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/contact">Contact us</Link>
                        <Link to="/my-courses">
                        <i className="far fa-play-circle"></i>{" "}
                        My Courses</Link>
                        <Link to="/cart" className="cart-i"><sup className="badge badge-danger">{cart.length}</sup><i className="far fa-shopping-cart"></i> Cart</Link>
                        <Link to="#" onClick={logout} className="btn">Logout</Link>
                        <Link to="/profile" className="avatar">
                            {user.firstname[0].toUpperCase() + user.lastname[0].toUpperCase()}
                        </Link></>
                        :<>
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/contact">Contact us</Link>
                        <Link to="/cart" className="cart-i"><sup className="badge badge-danger">{cart.length}</sup><i className="far fa-shopping-cart"></i> Cart</Link>
                        <Link to="/signup" className="btn btn-info">Signup</Link>
                        <Link to="/login" className="btn">Login</Link></>
                    }
                </ul>
            </div>
            </div>
        </div>
    )
}

export default NavbarDesktop
