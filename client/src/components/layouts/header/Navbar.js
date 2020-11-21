import React, { useEffect } from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import '../../../css/layout/navbar.css'
import {getCartItems} from '../../../actions/CartActions'
import {logout} from '../../../actions/AuthActions'
import {connect} from 'react-redux'

const Navbar = props => {
    useEffect(()=>{
        props.getCartItems()
    }, [])
    return (
        <div>
            <NavbarDesktop pprop={props}/>
            <NavbarMobile pprop={props}/>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    whish: state.cart.whish,
    auth: state.auth
})

export default connect(mapStateToProps, {getCartItems, logout})(Navbar)
