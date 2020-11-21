import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initState = {};

const middlewares = [thunk];
const store = createStore(rootReducer, initState, applyMiddleware(...middlewares));
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const store = createStore(rootReducer, initState, composeEnhancers(applyMiddleware(...middlewares)));

export default store;