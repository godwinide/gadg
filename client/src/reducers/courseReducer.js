import {FETCH_COURSES, FETCH_FACULTIES, FETCH_POPULAR_COURSES} from '../actions/types';

const initState = {
    courses: [],
    popularCourses:[],
    faculties: [],
    departments: [],
    coursesLoading: true,
    facultyLoading: true
};

const courseReducer = (state=initState, action) => {
    switch(action.type){
        case FETCH_COURSES:
            return {
                ...state,
                courses: action.payload,
                coursesLoading: false
            };
        case FETCH_POPULAR_COURSES:
            return {
                ...state,
                popularCourses: action.payload
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