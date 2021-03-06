import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../../../css/pages/home.css'
import {connect} from 'react-redux'
import FacultiesSkeleton from './FacultiesSkeleton'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = props => {
    const {faculties, facultyLoading, courses, coursesLoading} = props;
    // timer state
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [counting, setCounting] = useState(false)
    // image slider
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        }
      };
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },[])
    return (
        <div className="home home-page">
            <main>
                <div className="showcase hide-mobile hide-mobile">
                <h1 className="text-left purple-text">learn anytime, anywhere.</h1>
                <p>Ambition accepted. Learn the latest skills to reach your professional goals.</p>
                <form className="form-inline hide-mobile" action="/search">
                    <div className="input-group mb-2 mr-sm-2">
                        <input type="text" className="form-control"  placeholder="what do you want to learn?"/>
                        <div className="input-group-prepend">
                        <div className="input-group-text">
                            <button style={{padding:"0", backgroundColor:"transparent", border:"none"}}>
                                <i className="fas fa-search text-white"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </form>
                </div>
            </main>

            {/*  for mobile */}
            <div className="showcase hide-desktop">
                <form className="form-inline" action="/search">
                    <div className="input-group mb-2 mr-sm-2">
                        <input type="text" name="q" className="form-control"  placeholder="what do you want to learn?"/>
                        <div className="input-group-prepend">
                        <div className="input-group-text">
                            <button type="submit" style={{padding:"0", backgroundColor:"transparent", border:"none"}}>
                                <i className="fas fa-search text-white" style={{backgroundColor:"transparant"}}></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* faculties */}
            <div className="faculties">
                <h1 className="text-white">Faculties</h1>
                {
                    facultyLoading
                    ?<FacultiesSkeleton/>
                    : faculties.length === 0 
                    ? <p className="lead text-center text-white">No Faculties Available Right Now.</p>
                    :
                    <div className="faculties-wrap">
                        {
                            faculties.map((faculty, i) => (
                                <Link key={i}  to={"/faculty/" + faculty.nameSlug} className="faculty">
                                    <img src={faculty.thumbnail} alt={faculty.name}/>
                                    <div className="info">
                                        <p className="text-white truncate">{faculty.name}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                }
            </div>
            {/* newly added */}
            <div className="faculties course-scroll">
                <h1 className="text-white">Newly Added Audiobooks(with free PDF)</h1>
                {
                    coursesLoading
                    ?<FacultiesSkeleton/>
                    : courses.length === 0 
                    ? <p className="lead text-center text-white">No Courses Available Right Now.</p>
                    :
                    <Carousel
                        swipeable={true}
                        autoPlay={false}
                        draggable={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        className="c-wrap p-2"
                        >
                        {
                            courses.reverse().slice(0,11).map((course,key) =>(
                                <Link key={key} className="course" to={"/view-course/"+course.titleSlug} style={{marginRight:"1em",minHeight:"20em", maxHeight:"20em"}}>
                                    <img src={course.thumbnail} alt="course"/>
                                    <div>
                                        <p className="title text-white">{course.title}</p>
                                        <b className="text-warning" style={{fontWeight: "bold"}}>by {course.instructor}</b>
                                        <p className="h-price">₦{course.pricePerTopic} per chapter</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </Carousel>
                    
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    faculties: state.courses.faculties,
    facultyLoading: state.courses.facultyLoading,
    coursesLoading: state.courses.coursesLoading,
    courses: state.courses.courses
});

export default connect(mapStateToProps)(Home)