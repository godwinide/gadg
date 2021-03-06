import React from 'react'
import {Link} from 'react-router-dom'

const Course = ({course}) =>{
    return (
        <div className="course">
            <Link to={"/my-courses/view/"+course._id+"/0"}>
                <img src={course.thumbnail} alt="course-img"/>
                <p className="truncate title">{course.title}</p>
                <p className="instructor">By {course.instructor}</p>
            </Link>
        </div>
    )
}

export default Course
