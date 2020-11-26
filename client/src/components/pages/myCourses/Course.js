import React from 'react'
import {Link} from 'react-router-dom'

const Course = ({course}) =>{
    return (
        <div className="course">
            <Link to={"/my-courses/view/"+course._id+"/0"}>
                <img src={course.thumbnail} alt="course-img"/>
                <p className="purple-text truncate">{course.title}</p>
                <p>{course.instructor}</p>
            </Link>
        </div>
    )
}

export default Course
