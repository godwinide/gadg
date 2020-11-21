import React from 'react'
import '../../../css/pages/faculty.css'
import Skeleton from 'react-loading-skeleton'

const FacultySkeleton = props =>{
    return (
        <div className="faculty">
            <Skeleton height="20em" width="100%"/>
            <div className="course-list">
                <Skeleton className="course" height="10em"/>
                <Skeleton className="course" height="10em"/>
                <Skeleton className="course" height="10em"/>
                <Skeleton className="course" height="10em"/>
                <Skeleton className="course" height="10em"/>
                <Skeleton className="course" height="10em"/>
                <Skeleton className="course" height="10em"/>
            </div>
        </div>
    )
}

export default FacultySkeleton
