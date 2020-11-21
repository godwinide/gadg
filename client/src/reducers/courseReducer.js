import {FETCH_COURSES, FETCH_FACULTIES} from '../actions/types';

const initState = {
    courses: [],
    faculties: [],
    departments: [],
    facultyLoading: true
};

const courseReducer = (state=initState, action) => {
    switch(action.type){
        case FETCH_COURSES:
            return {
                ...state,
                courses: action.payload
            };
        case FETCH_FACULTIES:
            return {
                ...state,
                faculties: action.payload,
                facultyLoading: false
            }
        default:
            return state;
    }
}

export default courseReducer;