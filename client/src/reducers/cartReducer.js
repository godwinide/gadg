import {ADD_ITEM_TO_CART, FETCH_CART_ITEMS, REMOVE_ITEM_FROM_CART, CLEAR_CART} from '../actions/types';

const initState = {
    cart: [],
    whish: [],
};

const cartReducer = (state=initState, action) => {
    switch(action.type){
        case FETCH_CART_ITEMS:
            return {
                ...state,
                cart: action.payload.cart,
                whish: action.payload.whish
            };
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cart: [...action.payload]
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart: action.payload
            }
        case CLEAR_CART:
            return{
                ...state,
                cart: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;