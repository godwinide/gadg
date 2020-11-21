import React, { useEffect, useState } from 'react'
import  '../../../css/pages/cart.css';
import {connect} from 'react-redux'
import {getCartItems, removeItemFromCart} from '../../../actions/CartActions'
import { Link } from 'react-router-dom';


const Cart = ({cart, whish, removeItemFromCart}) => {
    const [total, setTotal] = useState(0)
    const handleRemove = (e) => {
        const id = e.target.getAttribute("name");
        removeItemFromCart(id);
    }

    useEffect(()=>{
        const _total = cart.reduce((t, item) => t + parseFloat(item.price), 0)
        setTotal(_total);
    },[cart, whish]);

    return (
        <div className="cart container row mx-auto">
            <div className="cart-items">
                <h3>{cart.length} items in cart</h3>
                <hr/>
                {cart
                 && cart.map(item => (
                <div key={item._id} className="cart-item mb-2">
                    <img src={item.thumbnail} alt="course-img" />
                    <div className="desc">
                        <h3>{item.title}</h3>
                        <h4>Price ₦ {item.price}</h4>
                    </div>
                    <div className="text-right">
                        <i onClick={handleRemove} name={item._id} className="far fa-trash text-danger" style={{cursor: "pointer"}}></i>
                    </div>
                </div>
                 ))
                }
                
            </div>
            <div className="cart-summary">
                <h3>Summary</h3>
                <hr/>
                <div>
                    <div className="total">
                        <p>Order Total:</p>
                        <p>₦ {total}</p>
                    </div>
                    {
                        cart.length > 0
                        ?<Link to="/checkout" className="btn btn-info">Proceed to checkout</Link>
                        :<button disabled className="btn btn-dark">Proceed to checkout</button>
                     
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    whish: state.cart.whish
})


export default connect(mapStateToProps, {removeItemFromCart,getCartItems})(Cart)
