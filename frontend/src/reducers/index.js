import {combineReducers} from 'redux'
import courseReducer from './courseReducer'
import cartReducer from './cartReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import loadReducer from './loadReducer'

const rootReducer = combineReducers({
    courses: courseReducer,
    cart: cartReducer,
    auth: authReducer,
    error: errorReducer,
    loader: loadReducer
});

export default rootReducer;