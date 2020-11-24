import React, {useEffect} from 'react'
import '../../../css/pages/contact.css'


const Contact = () => {
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },[])
    return (
        <div className="contact-us-wrap">
            <div className="c-header">
                <div className="mx-auto" style={{maxWidth:"500px"}}>
                <h1>We’d love to hear from you</h1>
                <p>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions</p>
                </div>
            </div>
            <div className="contact-row">
                <div>
                    <h2>Contact Enquiries</h2>
                    <p>Using any of our products and need help?
                       Get in touch with customer support
                    </p>
                    <p>
                        <i className="fas fa-phone"></i> +234905244577 | +234905244577
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> example@gmail.com
                    </p>
                </div>

                <div>
                <form>
                    <div className="form-group">
                        <h3>Send Us A Mesage</h3>
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Phone Number</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Send</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
