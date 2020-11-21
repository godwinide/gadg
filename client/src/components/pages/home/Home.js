import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/pages/home.css'
import {connect} from 'react-redux'
import FacultiesSkeleton from './FacultiesSkeleton'
import {Parallax} from 'react-parallax'
import {Fade, Rotate, Slide, Zoom, LightSpeed} from 'react-reveal'
import Jump from 'react-reveal'
import RubberBand from 'react-reveal'

const Home = props => {
    const {faculties, facultyLoading} = props
    return (
        <div className="home home-page">
            <main>
                <div className="showcase hide-mobile">
                <h1>learn anytime, anywhere.</h1>
                <p>Ambition accepted. Learn the latest skills to reach your professional goals.</p>
                <form className="form-inline hide-mobile">
                    <div className="input-group mb-2 mr-sm-2">
                        <input type="text" className="form-control"  placeholder="what do you want to learn?"/>
                        <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-search"></i>
                        </div>
                        </div>
                    </div>
                </form>
                </div>
            </main>
            {/*  for mobile */}
            <div className="showcase hide-desktop">
                <form className="form-inline">
                    <div className="input-group mb-2 mr-sm-2">
                        <input type="text" className="form-control"  placeholder="what do you want to learn?"/>
                        <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-search"></i>
                        </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* faculties */}
            <div className="faculties">
                <h1>Faculties</h1>
                {
                    facultyLoading
                    ?<FacultiesSkeleton/>
                    : faculties.length === 0 
                    ? <p className="lead text-center">No Faculties Available Right Now.</p>
                    :
                    <div className="faculties-wrap">
                        {
                            faculties.map(faculty => (
                                <Link to={"/faculty/" + faculty.nameSlug} className="faculty">
                                    <img src={faculty.thumbnail} alt="arts"/>
                                    <div className="info">
                                        <h3>{faculty.name}</h3>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                }
            </div>

            {/* about */}
            <Parallax className="intro" blur={1} bgImage="/img/sky.jpg" bgImageAlt="sky" strength={250}>
                <div className="grid-view p-5">
                    <div className="content">
                        <Slide left>
                            <h1><span style={{color:"crimson"}}>Gadgacademia </span>Online Educational Services</h1>
                        </Slide>
                        <Fade>
                        <p>
                        Gadg Academia is a service unit of Al Gadg. International Limited designed in finding solutions to the educational deficiency in Nigeria and Africa at large. We provides one stop digital solution for any educational Problems through our digitalized platforms. we provide customized high quality and reliable e-learning products in any formats. 
                        Gadg Academia is tailored to assist students and workers (professionals in all field of works) with the necessary e-learning materials to meet their needs. We provide the optimum and customized Audiobooks learning solutions made for your educational needs which are spread in different formats. (Mp3, Mp4, Wav, etc.)

                        </p>
                        </Fade>
                    </div>
                    <div className="image-wrap hide-mobile">
                        <Rotate>
                            <img src="/img/student.jpg" alt="student"/>
                        </Rotate>
                    </div>
                </div>
            </Parallax>

            {/* wy choose us */}
            <section className="wcu container">
                <LightSpeed left>
                    <h1>why choose us?</h1>
                </LightSpeed>
                <Zoom>
                    <p>
                    Gadg Academia is uniquely design to make learning easy, by providing e- learning materials in the three learning techniques for students. At Gadg Academia, we strongly believe that students success and good performance is dependent on the discovery of the right learning methods/techniques. 
                    </p>    
                </Zoom>
                <Jump>
                <div className="grid-view">
                    <div className="box">
                        <div className="icon-box">
                            <img src="/img/teacher.png" alt="teacher"/>
                        </div>
                        <div className="content-box">
                            <h3>Instructors</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie libero eget dui mollis, eu scelerisque dolor gravida. 
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <img src="/img/laptop.png" alt="teacher"/>
                        </div>
                        <div className="content-box">
                            <h3>Quality Content</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie libero eget dui mollis, eu scelerisque dolor gravida. 
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <img src="/img/shaking-hands.png" alt="teacher"/>
                        </div>
                        <div className="content-box">
                            <h3>Affordability</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie libero eget dui mollis, eu scelerisque dolor gravida. 
                            </p>
                        </div>
                    </div>
                </div>
                </Jump>
            </section>

            {/* team */}
            <section className="team">
                <RubberBand>
                    <h1>meet our perfect team</h1>
                </RubberBand>
                <Fade>
                <div className="profiles">
                    <div className="profile">
                        <div className="img"></div>
                        <div className="content">
                            <h3>Ogiemwanye Nosa Ighodaro</h3>
                            <p className="title">
                                CEO/FOUNDER
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="img"></div>
                        <div className="content">
                            <h3>Cummings Jerry</h3>
                            <p className="title">
                                Content Director
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="img"></div>
                        <div className="content">
                            <h3>Akinuli Olamilekan Prince</h3>
                            <p className="title">
                                Programmer
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="img"></div>
                        <div className="content">
                            <h3>Godwin Idemudia</h3>
                            <p className="title">
                                Programmer
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
                </Fade>
            </section>
            
        </div>
    )
}

const mapStateToProps = state => ({
    faculties: state.courses.faculties,
    facultyLoading: state.courses.facultyLoading
});
export default connect(mapStateToProps)(Home)
