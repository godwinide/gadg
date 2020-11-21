import React from 'react'
import { usePaystackPayment } from 'react-paystack'
import {connect} from 'react-redux'
import {clearCart} from '../actions/CartActions'
import {startLoading, stopLoading} from '../actions/loadActions'
import axios from 'axios'
import store from '../store'
import {loadUser} from '../actions/AuthActions'

const PaystackHook = props => {
    const {amount, clearCart, cart, loadUser, startLoading, stopLoading, pprop} = props;
    const config = {
        reference: (new Date()).getTime(),
        email: "klimaxcodez@gmail.com",
        amount: amount * 100,
        publicKey: 'pk_test_05f50aed5854be3bf9ce7490d7c085ad1ca45ea7',
    };
    
    const onSuccess = (reference) => {
      startLoading();
      // GET TOKEN
      const token = store.getState().auth.token
      const config = {
        headers:{
          'Content-Type': 'application/json'
        }
      }
      // SET TOKEN
      if(token){
        config.headers['x-auth-token'] = token;
      }
      const data = {newCourses:cart, reference: reference.reference, price:amount };
      axios.post("/api/users/purchase", data, config)
        .then(res => {
          clearCart();
          stopLoading();
          loadUser();
          pprop.history.push("/my-courses");
        }).catch(err => {
          stopLoading();
          console.log(err);
        })      
    };
    
    const onClose = () => {
      console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button className="btn btn-info" onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>
              <i className="fas fa-lock"></i>{" "}
              Pay Now</button>
      </div>
    );
};

const mapStateToProps = state => ({
  cart: state.cart.cart
})

export default connect(mapStateToProps, {
  clearCart,
  startLoading,
  loadUser,
  stopLoading})(PaystackHook)