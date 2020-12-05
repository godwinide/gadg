import React, {Component} from 'react'
import '../../../css/pages/contact.css'
import axios from 'axios'


class Contact extends Component {
    state = {
        name: "",
        email: "",
        body: "",
        error: "",
        success: "",
        loading: false
    }
    
    componentDidMount(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }

    handleInputs = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSend = e => {
        e.preventDefault();
        const {name, email, body, phone} = this.state;
        if(!name || !email || !body){
            this.setState({
                ...this.state,
                error: "Please fill all fields!"
            })
            return;
        }else{
            this.setState({
                ...this.state,
                error: "",
                success: "",
                loading: true
            })
            const config = {headers: {'Content-type': 'application/json'}};
            const msgBody = {name, email, phone, body};
            axios.post("/api/messages/sendMessage", msgBody, config)
            .then(res => {
                this.setState({
                    ...this.state,
                    success: res.data.msg,
                    loading: false,
                    name: '',
                    phone: '',
                    email: '',
                    body: ''
                })
            }).catch(err => {
                if(typeof err.response !== 'undefined'){
                    this.setState({
                        ...this.state,
                        loading: false,
                        error: err.response.data.msg
                    })
                }
            })
        }
    }

    render(){
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
                <form onSubmit={this.handleSend}>
                {
                    this.state.error
                    &&<div className="alert alert-warning" role="alert">
                        <strong>{this.state.error}</strong>
                    </div>
                    }
                    {
                        this.state.success
                        &&<div className="alert alert-success" role="alert">
                            <strong>{this.state.success}</strong>
                        </div>
                    }
                    <div className="form-group">
                        <h3>Send Us A Mesage</h3>
                        <label htmlFor="exampleInputEmail1">Full Name</label>
                        <input value={this.state.name}  name="name" onInput={this.handleInputs} required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input value={this.state.email}  name="email" onInput={this.handleInputs} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone Number</label>
                        <input value={this.state.phone} name="phone" onInput={this.handleInputs} required type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea value={this.state.body}  name="body" onInput={this.handleInputs} required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {
                        this.state.loading
                        ?<button type="button" disabled className="btn purple-bg text-white">
                            Sending..{" "}
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
}

export default Contact
