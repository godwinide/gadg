import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import '../../../css/layout/navbar-mobile.css';
import MobileSearchBar from './MobileSearchBar';
import SideMenu from './SideMenu';


const NavbarMobile = ({pprop:{cart, logout, auth:{isAuthenticated}}}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleOpenSearch = e => {
        e.preventDefault();
        setVisible(!visible);
        document.querySelector("#m-search").focus()
    }

    return (
        <>
        <div className="header nav-mobile">
            <div className="bar-wrap top" onClick={handleMenu}>
                <i className="fas fa-bars" onClick={handleMenu}></i>
            </div>
            <div className="m-logo-wrap brand-logo">
                <img src="/img/logo.png" alt="gadgacademia"></img>
            </div>
            {
                isAuthenticated
                ?<ul className="top">
                    <li><NavLink exact to="/"><i className="far fa-home"></i></NavLink></li>
                    <li onClick={handleOpenSearch}><i className="far fa-search"></i></li>
                    <li><NavLink to="/cart" className="cart-i"><sup className="badge badge-danger">{cart.length}</sup><i className="far fa-shopping-cart"></i></NavLink></li>
                    <li><NavLink to="/my-courses"><i className="far fa-play-circle"></i></NavLink></li>
                    <li><NavLink to="/profile"><i className="far fa-user"></i></NavLink></li>
                </ul>
                :<ul className="top">
                    <li><NavLink exact to="/"><i className="far fa-home"></i></NavLink></li>
                    <li onClick={handleOpenSearch}><i className="far fa-search"></i></li>
                    <li><NavLink to="/cart" className="cart-i"><sup className="badge badge-danger">{cart.length}</sup><i className="far fa-shopping-cart"></i></NavLink></li>
                    <li><NavLink to="/login"><i className="far fa-user"></i></NavLink></li>
                </ul>
            }
            {
            isAuthenticated
            ?<ul className="bottom" style={{width:"100%", margin:"0"}}>
                <li>
                    <div className="bar-wrap" onClick={handleMenu}>
                        <i className="fas fa-bars pl-2" onClick={handleMenu}></i>
                    </div>
                </li>
                <li><NavLink exact to="/"><i className="far fa-home"></i></NavLink></li>
                <li onClick={handleOpenSearch}><i className="far fa-search"></i></li>
                <li><NavLink to="/cart" className="cart-i"><sup className="badge badge-danger">{cart.length}</sup><i className="far fa-shopping-cart"></i></NavLink></li>
                <li><NavLink to="/my-courses"><i className="far fa-play-circle"></i></NavLink></li>
                <li><NavLink to="/profile" className="cart-i"><i className="far fa-user"></i></NavLink></li>
            </ul>
            :<ul className="bottom">
                <li>
                    <div className="bar-wrap" onClick={handleMenu}>
                        <i className="fas fa-bars pl-2" onClick={handleMenu}></i>
                    </div>
                </li>
                <li><NavLink exact to="/"><i className="far fa-home"></i></NavLink></li>
                <li onClick={handleOpenSearch}><i className="far fa-search"></i></li>
                <li><NavLink to="/cart" className="cart-i"><sup className="badge badge-danger">{cart.length}</sup><i className="far fa-shopping-cart"></i></NavLink></li>
                <li><NavLink to="/login" className="cart-i"><i className="far fa-user"></i></NavLink></li>
            </ul>
            }
        </div>
        <SideMenu isOpen={isOpen} handleMenu={handleMenu} logout={logout} isAuthenticated={isAuthenticated}/>
        <MobileSearchBar visible={visible} handleOpenSearch={handleOpenSearch}/>
        </>
    )
}

export default NavbarMobile
