import {FETCH_COURSES, FETCH_FACULTIES, FETCH_POPULAR_COURSES} from './types';
import axios from 'axios'


export const fetchCourses = faculty => dispatch => {
    axios.get(`/api/courses?faculty=${faculty}`)
    .then(res =>{
        dispatch({
            type: FETCH_COURSES,
            payload: res.data.courses
        })
    }).catch(err => {
        console.log(err)
    })
}

export const fetchAllCourses = () => dispatch => {
    axios.get(`/api/courses/all`)
    .then(res =>{
        dispatch({
            type: FETCH_COURSES,
            payload: res.data.courses
        })
    }).catch(err => {
        console.log(err)
    })
}


export const fetchFaculties = () => dispatch => {
    axios.get("/api/faculties")
    .then(res => {
        dispatch({
            type: FETCH_FACULTIES,
            payload: res.data.faculties
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const fetchPopularCourses = () => dispatch => {
    axios.get("/api/courses/popular")
    .then(res => {
        dispatch({
            type: FETCH_POPULAR_COURSES,
            payload: res.data.courses
        })
    })
    .catch(err => {
        console.log(err);
    })
}
