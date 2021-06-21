import {FETCH_CART_ITEMS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART} from './types';

export const getCartItems = () => dispatch => {
    if(!localStorage.getItem("cart") || !localStorage.getItem("wish")){
        localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("wish", JSON.stringify([]))
    }
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const whish = JSON.parse(localStorage.getItem("whish")) || [];
    dispatch({
        type: FETCH_CART_ITEMS,
        payload:{
            cart,
            whish
        }
    });
}

export const addItemToCart = item => dispatch => {
    // add item to localstorage
    const cart = JSON.parse(localStorage.getItem("cart"));
    // check if item already exits
    const exists = cart.some(_item => _item._id === item._id);
    if(!exists){
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: cart
        })
    }
}
export const removeItemFromCart = id => dispatch => {
        // remove item from localstorage
        const cart = JSON.parse(localStorage.getItem("cart"));
        const newCart = cart.filter(item => item._id !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        dispatch({
            type: REMOVE_ITEM_FROM_CART,
            payload: newCart
        })
}
export const clearCart = () => dispatch => {
    console.log("clearing cart")
    localStorage.setItem("cart", JSON.stringify([]))
    dispatch({type: CLEAR_CART, payload:[]})
}