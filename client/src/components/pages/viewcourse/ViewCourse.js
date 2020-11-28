import React, { useEffect, useState } from 'react'
import  '../../../css/pages/view-course.css';
import axios from 'axios'
import store from '../../../store'
import ViewCourseSkeleton from './ViewCourseSkeleton';
import NotFound from '../error-pages/NotFound'
import AudioPlayer from 'react-h5-audio-player';
import {Player} from 'video-react'
import 'react-h5-audio-player/lib/styles.css';
import "../../../css/pages/video-react.css"
import PayButton from '../../../hooks/PayButton';
import {connect} from 'react-redux'

const ViewCourse = props =>{
    const [dep, setDep] = useState(0);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState("");
    const [topics, setTopics] = useState([]);
    const [courseID, setCourseID] = useState(""); 
    const [notFound ,setNotFound] = useState(false);
    const [lessonNum, setLessonNum] = useState(0);
    const {match:{params:{id}}} = props;

    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },[])


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
    },[dep, lessonNum, id]);

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
                    ?<div className="video-wrap container mt-5 mx-auto">
                        <h1 className="purple-text">{current.title}</h1>
                        <p className="lead">Sorry, haven't purchased this topic.</p>
                        <PayButton amount={current.price}
                         successCallBack={()=> true}
                         topicID={current.id}
                         courseID={courseID}
                         setDep={setDep}
                         pprop={props}
                         />
                    </div>
                    :<div className="video-wrap">
                    <h1 className="purple-text">{current.title}</h1>
                        {
                            current.video 
                            &&<Player playsInline poster={current.thumbnail}
                            src={current.video} type="video/mp4" size="1080"
                           />
                        }
                        <div className="video-content mt-2">
                            <div className="container mx-auto">
                                <AudioPlayer
                                    src={current.audio}
                                    autoPlay={false}
                                    className=" m-player"
                                    // preload
                                />
                                <a download={current && current.pdf} href={current.pdf} className="btn  btn-dark" style={{marginTop:"2em", display:"block"}}>
                                    <i className="fas fa-arrow-down"></i>{" "}
                                    Download PDF
                                </a>
                                <div className="accordion mt-2" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header " id="headingOne">
                                            <button className="btn btn-block text-left btn-dark " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                               click to show description
                                            </button>
                                        </div>
                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body ">
                                            <p className="mt-3">{current.desc}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                {/* side nav start*/}
                <div className="side-nav">
                <div className="accordion mr-4 my-4 mx-auto" id="accordionExample">
                    <div className="card">
                        <p className="text-center lead">Course Topics</p>
                        <ul className="list-group course-topics">
                            {
                                topics.map((top,i) => (
                                    top.locked
                                    ?
                                    <button key={i} data-index={i} type="button" 
                                    onClick={handleChangeIndex}
                                    className={`list-group-item list-group-item-action ${top.id === current.id ? 'active' : ""}`}>
                                        {top.title}{" "}
                                        <span className="badge badge-danger badge-pill">
                                        <i className="fas fa-lock"></i>
                                        </span>
                                    </button>
                                    :<button key={i} data-index={i} type="button"
                                    onClick={handleChangeIndex}
                                    className={`list-group-item list-group-item-action ${top.id === current.id ? 'active' : ""}`}>
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

const mapStateToProps = state =>({
    email: state.auth.user.email
});

export default connect(mapStateToProps)(ViewCourse)
