import React from 'react'
import  '../../../css/pages/view-course.css';
import Skeleton from 'react-loading-skeleton'


const ViewCourseSkeleton = () =>{
    return (
        <div className="view-course p-2">
            <div className="course-view">

                <div className="current-view">
                    <div className="video-wrap">
                        <Skeleton height="2em" width="14em"/>
                        <Skeleton height="30em" width="40em" />
                        <Skeleton height="15em" width="40em"/>
                    </div>
                </div>
                {/* side nav start*/}
                <div className="side-nav">
                <div className="accordion mr-4 mt-2" id="accordionExample">
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                   <Skeleton width="100%" height="2em" className="mb-2" />
                </div>
                </div>
                {/* side nav end*/}
            </div>
        </div>
    )
}

export default ViewCourseSkeleton
