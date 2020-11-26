import React from 'react'
import { usePaystackPayment } from 'react-paystack'
import {connect} from 'react-redux'
import {clearCart} from '../actions/CartActions'
import {startLoading, stopLoading} from '../actions/loadActions'
import axios from 'axios'
import store from '../store'
import {loadUser} from '../actions/AuthActions'

const PayButton = props => {
    const {amount, setDep, topicID,courseID, startLoading, stopLoading} = props;
    const config = {
        reference: (new Date()).getTime(),
        email: props.pprop.email,
        amount: amount * 100,
        publicKey: 'pk_test_bace7f5863da9e00735f2eac31034c06d7453ceb',
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
      const data={topicID, courseID, price:amount, reference: reference.reference};
      axios.post("/api/users/purchase/topic", data, config)
      .then(res => {
          stopLoading();
          setDep(Math.random())
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
              Purchase Topic</button>
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
  stopLoading})(PayButton)