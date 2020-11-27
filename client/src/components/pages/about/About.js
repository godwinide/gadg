import React, { useEffect } from 'react'
import '../../../css/pages/about.css'
import {Parallax} from 'react-parallax'
import {Fade, Rotate, Slide, LightSpeed} from 'react-reveal'
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
                {/* about */}
                <Parallax className="intro" blur={1} bgImage="/img/sky.jpg" bgImageAlt="sky" strength={250}>
                    <div className="grid-view py-5 px-2">
                        <div className="content">
                            <Slide left>
                                <h1><span className="purple-text">Gadg Academia </span>Online Educational Services</h1>
                            </Slide>
                            <Fade>
                            <p>
                            Gadg Academia is one of the educational project of Al Gadg. International Limited. Al Gadg. International Limited is your digital company duly registered under the Corporate Affairs Commission (CAC) in Nigeria on August 16th 2017 with the Registration Number: 1431737.
                            Gadg Academia is designed to solve the deficiencies/gap in the learning process and system in Nigeria and Africa Universities at large. We believe that learning can be appealing to anyone when carefully designed to capture how they learn. That is why Gadg Academia provides students the opportunity to learn anywhere and anytime with our carefully designed e-courses in various formats. Gadg Academia is uniquely design to make learning easy, by providing e- learning materials in the three learning techniques for students. At Gadg Academia, we strongly believe that students success and good performance is dependent on the discovery of the right learning methods/techniques. Our Audiobooks enable the users to rewind, fast forward it’s contents until the users can comprehend those complex topics. Our learning materials are fashioned inline to meet any users’ perfect taste on learning.
                            Gadg Academia is tailored to assist students and workers (professionals in all fields of works) with the necessary e-learning materials to meet their needs. We provide the optimum and customized Audiobooks learning solutions made for your educational needs which are spread in different formats. (Mp3, Mp4, Wav, etc.)
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
                <div className="mission-wrap">
                    <div className="mission container mx-auto mb-3">
                        <h1 className="purple-text">- our mission -</h1>
                        <p>
                            Gadg Academia is committed in building a society that will impact every generation through education.
                        </p>
                    </div>
                    <div className="mission container mx-auto mb-3">
                        <h1 className="purple-text">- gadg academia vision -</h1>
                        <p>
                        Bringing education to your door step. 
                        </p>
                    </div>
                    <div className="mission container mx-auto mb-3">
                        <h1 className="purple-text">- gadg academia objectives -</h1>
                        <h3 className="lead ml-2">our goals are</h3>
                        <ul className="goals">
                            <li>
                            By providing affordable and high quality learning materials which in return
                            improve the performance of the student. (Either through any of the learning Method
                            Reading, Listening and visual Learning techniques. We believe that learning methods
                            varies with people and students and they should have access to any learning materials
                            suitable to improve his or her performance.) 
                            </li>
                            <li>
                            It is designed to eliminate and replace the inconsistency of lecturers not available for lectures
                            </li>
                            <li>
                            To assist student with the latest update of lectures, that is, to help students recover lost lecture hours, (course topics) passed to their colleague in their absent. 
                            </li>
                            <li>
                            To make learning more attractive and appealing. 
                            </li>
                            <li>
                            It’s tailored to solve other areas like:
                            <ul>
                                <li>Solution to complex course topics.</li>
                                <li>Speed/pace (study within or before assessment or exams).</li>
                                <li>Reviews/revision (students can rewind or replay course topics).</li>
                                <li>Cost problem (reduce high cost of Learning Materials).</li>
                                <li>Comfort and convenience (study at comfort and time).</li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            {/* wy choose us */}
            <section className="wcu container">
                <LightSpeed left>
                    <h1 className="purple-text">why choose us?</h1>
                </LightSpeed>
                <Jump>
                <div className="grid-view">
                    <div className="box box-1">

                        <div className="content-box">
                            <h3 className="pink-text">Easily Affordable</h3>
                            <p>
                                The cost of educational materials are on the increase because of inflation, so
                                lecturers finds it very difficult to reduce the cost of their textbooks and handout
                                which are made mandatory for all students in some institutions. Gadg Academia
                                materials helps both lecturers and students in solving the cost problems. Ematerials are cheap and easy to use. With a click, a student can download any
                                learning materials with ease at no or low cost 
                            </p>
                        </div>
                    </div>
                    <div className="box box-2">
                        <div className="content-box">
                            <h3 className="pink-text">Convinience</h3>
                            <p>
                            The process of learning becomes more interesting when you study at your own
                            time, this facts deals with the behavior on how humans wants things to be done
                            at their time and pace. E-learning provides you such opportunity to learn at your
                            own time and pace. When lectures are skips for any reasons such system provide
                            you the second chance of gaining or recovering what was lost. Unlike our normal
                            educational system of learning, such chances are not given because the lecturer
                            works with the time and pace of the institution. 
                            </p>
                        </div>

                    </div>
                    <div className="box box-1">

                        <div className="content-box">
                            <h3 className="pink-text">Rapid Solution</h3>
                            <p>
                            The exam is slated for next week or you have a paper tomorrow and you haven’t
                            study. Our 20 to 25 minutes video lectures and 5 minutes summary can help you
                            study for these assessment or exams. Usually the summary is the key to such
                            urgent learning. Our 5 minutes summary, summarizes the entire topic for better
                            understanding.  
                            </p>
                        </div>
                    </div>
                    <div className="box box-2">
                        <div className="content-box">
                            <h3 className="pink-text">Security</h3>
                            <p>
                                Some uncontrollable circumstances can be avoided when people get accustom to
                                Gadg Academia. Natural event that are beyond human control include Weather
                                Condition and Economic Situation (Inflation; increase in learning materials, fees,
                                transportation) etc. can be avoided
                            </p>
                        </div>

                    </div>
                    <div className="box box-1">

                        <div className="content-box">
                            <h3 className="pink-text">Comfort</h3>
                            <p>
                                Driving from office after the close of work to attend a lecture for upcoming
                                professional exams, the stress of jumping one bus to another, the stress of
                                travelling to Lagos to attend a seminar or a course program, the mindset of trying
                                to meet up with lectures, all these can be avoided through using Gadg Academia.
                                Its stress free, money and time saving. 
                            </p>
                        </div>
                    </div>
                    <div className="box box-2">
                        <div className="content-box">
                            <h3 className="pink-text">SOLUTIONS TO COMPLEX ISSUES</h3>
                            <p>
                                Studying with Gadg Academia platform helps you to deal with complex topics.
                                Compound topics that you were once thought can be review and followed
                                properly. Gadg Academia gives you the opportunity to rewind, replay, pause and
                                even forward your downloaded video or audio copy for easy understanding. 
                            </p>
                        </div>

                    </div>
                    <div className="box box-1">

                        <div className="content-box">
                            <h3 className="pink-text">Reviews</h3>
                            <p>
                                Gadg Academia learning platform offers students, business community and
                                researcher the opportunity to attend lectures over and over again, replay of this
                                lectures helps the reader or learner comprehend complex topics faster and easily.
                            </p>
                        </div>
                    </div>
                    <div className="box box-2">
                        <div className="content-box">
                            <h3 className="pink-text">FREE LECTURES</h3>
                            <p>
                                Some Lectures on Gadg Academia are free, course registration and tuition fee are
                                eliminated because the system provide you direct access to these course
                                materials. 
                            </p>
                        </div>

                    </div>
                    <div className="box box-1">

                        <div className="content-box">
                            <h3 className="pink-text">Speed</h3>
                            <p>
                                Most Students and learners have study schedules, sometimes they do have
                                intention of getting prepared few weeks before the examination or days before
                                the assessment commences. Gadg Academia platform gives the student the 
                                opportunity to read and study at his or her pace and time. It eliminates the
                                barriers of waiting for any academic tutors.
                            </p>
                        </div>
                    </div>
                    <div className="box box-2">
                        <div className="content-box">
                            <h3 className="pink-text">Punctuality</h3>
                            <p>
                            The use of our system, helps to eliminate anxiety. The thought of not been able to
                            attend classes or trying to meet up with lectures are over. Here you are neither in
                            a hurry or worried for not making the appointments, just a click from where you
                            are, you can learn exactly what was passed to your colleagues.
                            </p>
                        </div>

                    </div>
                    <div className="box box-1">

                        <div className="content-box">
                            <h3 className="pink-text">unlimited</h3>
                            <p>
                            In Gadg Academia, location is not a barrier because the learner chooses from
                            several alternative on where he or she feel is best for studying. It could be in the
                            library, Home, School, Office, when travelling etc. 
                            </p>
                        </div>
                    </div>
                    <div className="box box-2">
                        <div className="content-box">
                            <h3 className="pink-text">Performance</h3>
                            <p>
                            The use of Gadg Academia material can enhance your performance at work place and school. Performance is as a result of consistent learning. 
                            </p>
                        </div>

                    </div>
                </div>
                </Jump>
            </section>

            {/* team */}
            <section className="team">
                <RubberBand>
                    <h1 className="purple-text">meet our perfect team</h1>
                </RubberBand>
                <Fade>
                <div className="profiles">
                    <div className="profile">
                        <div className="img"></div>
                        <div className="content">
                            <p className="name">Ogiemwanye Nosa Ighodaro</p>
                            <p className="purple-text">
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
                            <p className="purple-text">
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
                            <p className="purple-text">
                                Content Creator
                            </p>
                            <p>
                                He is a policy analyst and content enthusiast who had partner with allot of startup organisation in achieving top quality delivery on diverse project. A key team member in Gadg Academia which he dream is going to take the world by storm.
                            </p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="img"></div>
                        <div className="content">
                            <p className="name">Carlton Akhigbe</p>
                            <p className="purple-text">
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
                            <p className="purple-text">
                                Software Engineer
                            </p>
                            <p>
                                He is the CEO of Lakesbim IT, a young entrepreneur, a software engineer.
                            </p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="img"></div>
                        <div className="content">
                            <p className="name">Godwin Idemudia</p>
                            <p className="purple-text">
                                Software Engineer
                            </p>
                            <p>
                                He is a software engineer who has an innate love of writing code to solve complex issues
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
