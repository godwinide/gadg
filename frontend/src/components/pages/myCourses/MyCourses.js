import React, { useEffect } from 'react'
import  '../../../css/pages/mycourses.css';
import Course from './Course';
import {connect} from 'react-redux'


const MyCourses = ({courses}) =>{
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },[])
    return (
        <div className="purple-bg">
            <div className="mycourses container">
                <div className="c-nav text-center">
                    <h3 className="text-center">My Courses</h3>
                </div>
                <div className="courses">
                    {
                        courses.length > 0
                        ?courses.map((course,i) => (
                            <Course key={i} course={course} />
                        ))
                        :<p className="text-center">You havent purchased any course.</p>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    courses: state.auth.user.courses
})

export default connect(mapStateToProps)(MyCourses)
