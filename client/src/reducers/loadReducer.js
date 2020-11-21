import {START_LOADING, STOP_LOADING} from '../actions/types'

const initState = {
    loading: false
};

export default function errorReducer (state=initState, action){
    switch(action.type){
        case START_LOADING:
            return {
                loading: true
            }
        case STOP_LOADING:
            return {
                loading: false
            }
        default:
            return state
    }
}