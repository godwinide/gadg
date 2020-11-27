import React, {useEffect} from 'react'
import '../../../css/pages/contact.css'
import axios from 'axios'


const Contact = () => {
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },[])

    const formInputs = {
        name: "",
        email: "",
        body: "",
        error: "",
        success: "",
        loading: false
    }

    const handleInputs = e => {
        formInputs[e.target.name] = e.target.value;
    }

    const handleSend = e => {
        e.preventDefault();
        const {name, email, body, phone} = formInputs;
        if(!name || !email || !body){
            console.log("hello")
            formInputs.error = "Please fill all fields!";
            return;
        }else{
            formInputs.error = "";
            formInputs.success = "";
            formInputs.loading = true;
            const config = {headers: {'Content-type': 'application/json'}};
            const body = {name, email, phone, body};
            axios.post("/api/messages/sendMessage", body, config)
            .then(res => {
                formInputs.success = res.data.msg;
            }).catch(err => {
                formInputs.error = "Something went wrong";
            })
        }
    }

    return (
        <div className="contact-us-wrap">
            <div className="c-header">
                <div className="text-wrap">
                <h1 className="purple-text">We’d love to hear from you</h1>
                <p>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions</p>
                </div>
            </div>
            <div className="contact-row">
                <div>
                    <h2 className="purple-text">Contact Enquiries</h2>
                    <p>Using any of our products and need help?
                       Get in touch with customer support
                    </p>
                    <p>
                        <i className="fas fa-phone"></i> +2349050390358
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> gadg.academia@gmail.com
                    </p>
                </div>

                <div>
                <form onSubmit={handleSend}>
                {
                    formInputs.error
                    &&<div className="alert alert-warning" role="alert">
                        <strong>{formInputs.error}</strong>
                    </div>
                    }
                    {
                        formInputs.success
                        &&<div className="alert alert-success" role="alert">
                            <strong>{formInputs.success}</strong>
                        </div>
                    }
                    <div className="form-group">
                        <h3>Send Us A Mesage</h3>
                        <label htmlFor="exampleInputEmail1">Full Name</label>
                        <input  name="name" onInput={handleInputs} required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input  name="email" onInput={handleInputs} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone Number</label>
                        <input name="phone" onInput={handleInputs} required type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea  name="message" onInput={handleInputs} required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {
                        formInputs.loading
                        ?<button type="button" className="btn purple-bg text-white">
                            Sending{" "}
                            <i className="fas fa-paper-plane"></i>
                        </button>
                        :<button type="submit" className="btn purple-bg text-white">
                        Send{" "}
                        <i className="fas fa-paper-plane"></i>
                        </button>
                    }
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
