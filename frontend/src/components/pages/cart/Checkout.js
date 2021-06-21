import React, { useEffect, useState } from 'react'
import  '../../../css/pages/cart.css';
import {connect} from 'react-redux'
import {getCartItems} from '../../../actions/CartActions'
import PaystackHook from '../../../hooks/PaystackHook'


const Checkout = props => {
    const {cart, whish} = props;
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const _total = cart.reduce((t, item) => t + parseFloat(item.price), 0)
        setTotal(_total);
    },[cart, whish]);


    return (
        <div className="cart container row mx-auto">
            <div className="cart-items">
                <h3>Order Details</h3>
                <hr/>
                {cart
                 && cart.map(item => (
                <div key={item._id} className="cart-item mb-2">
                    <img src={item.thumbnail} alt="course-img" />
                    <div className="desc">
                        <h3>{item.title}</h3>
                        <h4>Price ₦ {item.price}</h4>
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
                        <p>Total:</p>
                        <p>₦ {total}</p>
                    </div>
                    {
                        cart.length > 0
                        ?< PaystackHook amount={total} pprop={props} />
                        :<button disabled className="btn btn-dark">
                            <i className="far fa-lock"></i>
                        {" "}Complete Payment</button>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    email: state.auth.user.email
})


export default connect(mapStateToProps, {getCartItems})(Checkout)
