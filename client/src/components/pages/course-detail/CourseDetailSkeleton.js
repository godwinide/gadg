import React from 'react'
import  '../../../css/pages/course-details.css';
import Skeleton from 'react-loading-skeleton';


const CourseDetailSkeleton = (props) =>{
    return (
        <div className="course-detail">
            <div className="preview row">
                <Skeleton height={400} width={500} className="prev col-md-6"/>
                <div className="col-md-6">
                    <Skeleton height={10} width={500}/>
                    <Skeleton height={10} width={500}/>
                    <Skeleton height={10} width={500}/>
                    <Skeleton height={10} width={500}/>
                </div>
            </div>
            </div>
    )
}


export default CourseDetailSkeleton
