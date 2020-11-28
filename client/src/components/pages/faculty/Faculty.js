import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../../../css/pages/faculty.css'
import NotFound from '../error-pages/NotFound';
import FacultySkeleton from './FacultySkeleton'
const axios = require("axios");

const Faculty = props =>{
    const {match:{params:{id}}} = props;
    const [faculty, setFaculty] = useState({});
    const [courses, setCourses] = useState([]);
    const [courseLoading, setCourseLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },[])

    useEffect(()=>{
        if(!id){
            setNotFound(true)
            return;
        }else{
            axios.get("/api/faculties/filterById/"+id)
            .then(res => {
                if(!res.data.faculty || res.data.faculty == null){
                    setNotFound(true);
                    setCourseLoading(false);
                    return;
                }else{
                    setFaculty(res.data.faculty);
                    axios.get("/api/courses/filterByFaculty/"+res.data.faculty._id)
                    .then(res => {
                        setCourseLoading(false);
                        setCourses(res.data.courses);
                    }).catch(()=>{
                        setNotFound(true)
                        setCourseLoading(false);
                        return;
                    })
                }
            }).catch(()=>{
                setNotFound(true);
                setCourseLoading(false);
                return;
            })
        }
    },[id])

    return (
        courseLoading 
        ?<FacultySkeleton/>
        : notFound 
        ? <NotFound/>
        : courses.length > 0
        ?
        <div className="faculty purple-bg">
            <div className="heading">
                <div className="shadow"></div>
                <img src={faculty.thumbnail} className="banner" alt="banner"/>
                <h1 className="title">{faculty.name}</h1>
            </div>
            <div className="course-list">
                {
                    courses.map(course =>(
                        <Link className="course" to={"/view-course/"+course.titleSlug}>
                            <img src={course.thumbnail} alt="course"/>
                            <div info>
                                <p className="title text-white truncate">{course.title}</p>
                                <p>by {course.instructor}</p>
                                <h2>₦{course.price}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        :
        <div className="faculty">
            <div className="heading">
                <div className="shadow"></div>
                <img src={faculty.thumbnail} className="banner" alt="banner"/>
                <h1 className="title">{faculty.name}</h1>
            </div>
            <p className="lead text-center mt-4">No Courses Available Right Now.</p>
        </div>
        
    )
}

export default Faculty
