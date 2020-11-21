import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="p-3">
            <div className="links row">
            <ul className="col-6">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <ul className="col-6">
                <li><Link to="/">Privacy policy</Link></li>
                <li><Link to="/">Sitemap</Link></li>
                <li><Link to="/">DCMA</Link></li>
            </ul>
            </div>
            <p className="text-center">copyright &copy; Gadgacademia 2020</p>
        </footer>
    )
}

export default Footer
