import React, { useEffect } from 'react'
import '../../../css/pages/about.css'

const About = () => {
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },[])
    return (
        <div className="about-us-wrap">
            <div className="about-us">
                <div className="mission-wrap">
                    <div className="mission container mx-auto">
                        <h1>- our mission -</h1>
                        <p>
                        Gadg Academia is uniquely design to make learning easy, by providing e- learning materials in the three learning techniques for students. At Gadg Academia, we strongly believe that students success and good performance is dependent on the discovery of the right learning methods/techniques. We also believe that learning can be interesting and exciting when learning materials are fashioned inline with the users perfect taste of learning. Some good readers sometimes might not be too good in listening when learning, so Gadg Academia Audiobook enable the users to rewind, fast forward it’s contents until the users can comprehend the complex subject. 
                        </p>
                    </div>
                </div>
                <div className="about-wrap">
                    <div className="about container mx-auto">
                        <h2>About</h2>
                        <p>
                        Al Gadg. International Limited is your digital partner, duly registered under the Corporate Affairs Commission (CAC) in Nigeria on August 16th 2017 with the with Registration Number: 1431737.
                        Gadg Academia is a service unit of Al Gadg. International Limited designed in finding solutions to the educational deficiency in Nigeria and Africa at large. We provides one stop digital solution for any educational Problems through our digitalized platforms. we provide customized high quality and reliable e-learning products in any formats. 
                        Gadg Academia is tailored to assist students and workers (professionals in all field of works) with the necessary e-learning materials to meet their needs. We provide the optimum and customized Audiobooks learning solutions made for your educational needs which are spread in different formats. (Mp3, Mp4, Wav, etc.)
                        </p>
                    </div>
                </div>
                <div className="leaders">
                    <h2>meet our perfect <span className="text-primary">team</span></h2>

                    <div className="grid-view">
                        <div className="box">
                            <img src='/img/ceo.jpg' alt="Ogiemwanye" />
                            <h4>Ogiemwanye Nosa Ighodaro</h4>
                            <p className="title">CEO/FOUNDER</p>
                            <hr className="line"></hr>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="box">
                            <img src='/img/contentcreator.jpg' alt="Cummings"/>
                            <h4>Cummings Jerry</h4>
                            <p className="title">Content Creator</p>
                            <hr className="line"></hr>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="box">
                            <img src='/img/joeffrey.jpg' alt="Joeffrey"/>
                            <h4>Jeoffrey Ogunsuyi Sunny</h4>
                            <p className="title">Content Creator</p>
                            <hr className="line"></hr>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="box">
                            <img src='/img/lakesbim.jpg' alt="Akinuli"/>
                            <h4>Akinuli Olamilekan Prince</h4>
                            <p className="title">Programmer</p>
                            <hr className="line"></hr>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="box">
                            <img src='/img/godwin.jpg' alt="Godwin"/>
                            <h4>Godwin Idemudia</h4>
                            <p className="title">Programmer</p>
                            <hr className="line"></hr>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="box">
                            <img src='/img/godwin.jpg' alt="Godwin"/>
                            <h4>Godwin Idemudia</h4>
                            <p className="title">Programmer</p>
                            <hr className="line"></hr>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
