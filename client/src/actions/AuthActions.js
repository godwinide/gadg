import axios from 'axios'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS
} from './types'
import {returnErrors} from './ErrorActions'

// check token and load user
export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({type: USER_LOADING})
    axios.get("/api/users/auth/user", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data.user
            })
        }).catch(err => {
            console.log(err)
            dispatch(returnErrors(err.response, err.response.status));
            dispatch({type: AUTH_ERROR});
        })
} 



export const register = data => dispatch => {
    const config = {
        headers:{
            'Content-type': 'application/json'
        }
    };
    const body = data;
    axios.post("/api/users/register", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch({type: REGISTER_FAIL})
        })
}

// logut
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// login
export const login = (user, redirect) => dispatch => {
    const config = {
        headers:{
            'Content-type': 'application/json'
        }
    };
    const body = JSON.stringify(user);
    axios.post("/api/users/auth/login", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            redirect("/")
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
            dispatch({type: LOGIN_FAIL})
        })
}

// set up conig/headers token

export const tokenConfig = (getState) => {
        // get token from localstorage
        const token = localStorage.getItem("token") || getState().auth.token;
        const config = {
            headers:{
                'Content-type': "application/json"
            }
        }
        // if token add to headers
        if(token){
            config.headers['x-auth-token'] = token;
        }
        return config;
}