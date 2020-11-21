import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  '../../../css/pages/mycourses.css';
import Course from './Course';
import {connect} from 'react-redux'


const MyCourses = ({courses}) =>{
    return (
        <div className="mycourses container p-2">
        <div className="c-nav">
            <h2 className="text-center">My Courses</h2>
        </div>
        <div className="courses">
            {
                courses.length > 0
                ?courses.map(course => (
                    <Course course={course} />
                ))
                :<p className="text-center">You havent purchased any course.</p>
            }
        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    courses: state.auth.user.courses
})

export default connect(mapStateToProps)(MyCourses)
