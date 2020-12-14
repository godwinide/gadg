import React from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import '../../../css/layout/navbar.css'
import {getCartItems} from '../../../actions/CartActions'
import {logout} from '../../../actions/AuthActions'
import {connect} from 'react-redux'

const Navbar = props => {
    return (
        <div>
            <div className="alert alert-info alert-dismissible fade show text-center" role="alert" style={{margin:"0"}}>
            <strong className="text-center">
            Anytime, anywhere | Learn on your schedule from any device</strong>.
            </div>
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
