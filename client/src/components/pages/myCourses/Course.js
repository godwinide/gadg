import React from 'react'
import {Link} from 'react-router-dom'

const Course = ({course}) =>{
    return (
        <div className="course">
            <Link to={"/my-courses/view/"+course._id+"/0"}>
                <img src={course.thumbnail} alt="course-img"/>
                <h2>{course.title}</h2>
                <h3>by Godwin Idemudia</h3>
            </Link>
        </div>
    )
}

export default Course
