import React, { useEffect, useState } from 'react'
import  '../../../css/pages/view-course.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from '../../../store'
import ViewCourseSkeleton from './ViewCourseSkeleton';
import NotFound from '../error-pages/NotFound'
import AudioPlayer from 'react-h5-audio-player';
import {Player} from 'video-react'
import 'react-h5-audio-player/lib/styles.css';
import "../../../css/pages/video-react.css"
import PayButton from '../../../hooks/PayButton';

const ViewCourse = props =>{
    const [dep, setDep] = useState(0);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState("");
    const [topics, setTopics] = useState([]);
    const [courseID, setCourseID] = useState(""); 
    const [notFound ,setNotFound] = useState(false);
    const [lessonNum, setLessonNum] = useState(0);
    const {match:{params:{id}}} = props;
    useEffect(() =>{
        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }
        const token = store.getState().auth.token;
        if(token){
            config.headers['x-auth-token'] = token
        };
        axios.get(`/api/users/courses/${id}`, config)
        .then(res => {
            if(res.data.course){
                const _current = res.data.course.topics[lessonNum];
                if(_current){
                    setCurrent(_current);
                    setTopics(res.data.course.topics);
                    setCourseID(res.data.course._id);
                    setLoading(false);
                }else{
                    setNotFound(true);
                    setLoading(false);
                }
            }else{
                setNotFound(true);
                setLoading(false);
            }
        })
        .catch(() =>{
            setLoading(false);
            setNotFound(true);
        })
    },[dep, lessonNum]);

    const handleChangeIndex = e => {
        const index = e.target.dataset.index;
        setLessonNum(index);
    }

    return (
        loading
        ? <ViewCourseSkeleton/>
        :notFound
        ?<NotFound/>
        :<div className="view-course p-2">
            <div className="course-view">

                <div className="current-view">
                    {
                    current.locked
                    ?<div className="video-wrap mt-5">
                        <p className="lead">Sorry, haven't purchased this topic.</p>
                        <PayButton amount={current.price}
                         successCallBack={()=> true}
                         topicID={current.id}
                         courseID={courseID}
                         setDep={setDep}
                         />
                    </div>
                    :<div className="video-wrap">
                    <h1>{current.title}</h1>
                        <Player playsInline poster={current.thumbnail}
                         src={current.video} type="video/mp4" size="1080"
                        />
                        <div className="video-content mt-2">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="lesson-tab" data-toggle="tab" href="#lesson" role="tab" aria-controls="lesson" aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="files-tab" data-toggle="tab" href="#files" role="tab" aria-controls="files" aria-selected="false">lesson files</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="lesson" role="tabpanel" aria-labelledby="lesson-tab">
                                <p className="mt-3">{current.desc}</p>
                            </div>
                            <div className="tab-pane fade" id="files" role="tabpanel" aria-labelledby="files-tab" style={{padding:"2em"}}>
                                <AudioPlayer
                                    src={current.audio}
                                    // preload
                                />
                                <a download={current && current.pdf} href={current.pdf} className="btn btn-info" style={{marginTop:"2em"}}>
                                    <i className="fas fa-arrow-down"></i>{" "}
                                    Download PDF
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                {/* side nav start*/}
                <div className="side-nav">
                <div className="accordion mr-4 my-4" id="accordionExample">
                    <div className="card">
                        <h4 className="text-center">Course Topics</h4>
                        <ul className="list-group">
                            {
                                topics.map((top,i) => (
                                    top.locked
                                    ?
                                    <button data-index={i} type="button" 
                                    onClick={handleChangeIndex}
                                    class={`list-group-item list-group-item-action ${top.id === current.id ? 'active' : ""}`}>
                                        {top.title}{" "}
                                        <span className="badge badge-danger badge-pill">
                                        <i className="fas fa-lock"></i>
                                        </span>
                                    </button>
                                    :<button data-index={i} type="button"
                                    onClick={handleChangeIndex}
                                    class={`list-group-item list-group-item-action ${top.id === current.id ? 'active' : ""}`}>
                                        {top.title}{" "}
                                    </button>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                </div>
                {/* side nav end*/}
            </div>
        </div>
    )
}

export default ViewCourse
