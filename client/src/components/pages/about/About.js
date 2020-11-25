import React, { useEffect } from 'react'
import '../../../css/pages/about.css'
import {Parallax} from 'react-parallax'
import {Fade, Rotate, Slide, Zoom, LightSpeed} from 'react-reveal'
import Jump from 'react-reveal'
import RubberBand from 'react-reveal'
import '../../../css/pages/home.css'


const About = () => {
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },[])
    return (
        <div className="about-us-wrap home">
            <div className="about-us">
                <div className="mission-wrap">
                    <div className="mission container mx-auto">
                        <h1>- our mission -</h1>
                        <p>
                        Gadg Academia is uniquely design to make learning easy, by providing e- learning materials in the three learning techniques for students. At Gadg Academia, we strongly believe that students success and good performance is dependent on the discovery of the right learning methods/techniques. We also believe that learning can be interesting and exciting when learning materials are fashioned inline with the users perfect taste of learning. Some good readers sometimes might not be too good in listening when learning, so Gadg Academia Audiobook enable the users to rewind, fast forward it’s contents until the users can comprehend the complex subject. 
                        </p>
                    </div>
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
                            <p className="name">Ogiemwanye Nosa Ighodaro</p>
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
                            <p className="name">Cummings Jerry</p>
                            <p className="title">
                                Content Creator
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
                            <p className="name">Jeoffrey Ogunsuyi Sunny</p>
                            <p className="title">
                                Content Creator
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
                            <p className="name">Carlton Akhigbe</p>
                            <p className="title">
                                Human Resources
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
                            <p className="name">Akinuli Olamilekan Prince</p>
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
                            <p className="name">Godwin Idemudia</p>
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
        </div>
    )
}

export default About
