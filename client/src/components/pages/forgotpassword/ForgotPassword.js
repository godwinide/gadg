import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../../../css/pages/forgotpassword.css'


class ForgotPassword extends Component {
    state = {
        email:"",
        newPass:"",
        newPass2:"",
        step: 1,
        errorMsg:"",
        successMsg:"",
        sending: false
    };

    config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleEmail = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            successMsg:"",
            errorMsg:"",
            sending: true,
        });
        const body = {email: this.state.email}
        axios.post("/api/users/sendcode", body, this.config)
        .then(res => {
            this.setState({
                ...this.state,
                sending: false,
                successMsg: res.data.msg,
                step: 2
            });
        })
        .catch(err => {
            this.setState({
                ...this.state,
                sending: false,
                successMsg:"",
                errorMsg: err.response.data.msg,
            });
        })
    }

    handleCode = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            successMsg:"",
            errorMsg:"",
            sending: true,
        });

        const body = {email: this.state.email, code: this.state.code}
        axios.post("/api/users/sendcode/confirm", body, this.config)
        .then(res => {
            this.setState({
                ...this.state,
                sending: false,
                successMsg: "verification successful, now set a new password",
                step: 3
            });
        })
        .catch(err => {
            this.setState({
                ...this.state,
                sending: false,
                successMsg:"",
                errorMsg: err.response.data.msg,
            });
        })
    }

    handleBack = () => {
        this.setState({
            step: this.state.step - 1,
            successMsg: "",
            errorMsg: "",
            code:""
        })
    }

    handlePassword = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            successMsg:"",
            errorMsg:"",
            sending: true,
        });
        const body = {
             email: this.state.email,
             code: this.state.code,
             newPass: this.state.newPass,
             newPass2: this.state.newPass2
         }
        axios.post("/api/users/auth/changePassword2", body, this.config)
        .then(res => {
            this.setState({
                ...this.state,
                step: 4,
                successMsg: "Password changed successfully, you can now login"
            });
        })
        .catch(err => {
            this.setState({
                ...this.state,
                sending: false,
                successMsg:"",
                errorMsg: err.response.data.msg,
            });
        })
    }
    
    render(){
        return (
            <div className="forgot-password-wrap">
                <div className="forgot-password container mx-auto">
                    <h1>forgot password</h1>
                        <div>
                            {
                            this.state.errorMsg
                            &&<div className="alert alert-warning" role="alert">
                                <strong>{this.state.errorMsg}</strong>
                            </div>
                            }
                            {
                                this.state.successMsg
                                &&<div className="alert alert-success" role="alert">
                                    <strong>{this.state.successMsg}</strong>
                                </div>
                            }
                        </div>
                        {
                         this.state.step === 1
                        &&<form onSubmit={this.handleEmail}>    
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address of your account.</label>
                                <input required type="email" className="form-control" id="exampleInputEmail1"
                                 name="email"
                                 value={this.state.email}
                                 onInput={this.handleInput}
                                 aria-describedby="emailHelp"/>
                                <small id="emailHelp" className="form-text text-white">We'll send a verification code to this email.</small>
                            </div>
                            {
                                this.state.sending
                                ?<button type="button" disabled  className="btn btn-primary">Please wait</button>
                                :<>
                                <button type="submit"  className="btn btn-primary">continue</button>
                                </>
                            }
                        </form>
                        }
                        {
                        this.state.step === 2
                        &&<form onSubmit={this.handleCode}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Enter the code we sent you.</label>
                                <input required type="number" className="form-control" id="code"
                                name="code"
                                value={this.state.code}
                                onInput={this.handleInput}/>
                            </div>
                            {
                                this.state.sending
                                ?<button type="button" disabled  className="btn btn-primary">Please wait</button>
                                :<div>
                                <button type="button" onClick={this.handleBack} className="btn btn-dark mr-2">Go back</button>
                                <button type="submit" className="btn btn-primary">continue</button>
                                </div>
                            }
                        </form>
                        }
                        {
                        this.state.step === 3
                        &&<form onSubmit={this.handlePassword}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Enter new password.</label>
                                <input required type="password"
                                 name="newPass"
                                 value={this.state.newPass}
                                 onInput={this.handleInput}
                                 className="form-control"
                                 id="code1"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Retype password.</label>
                                <input required type="password"
                                 name="newPass2"
                                 value={this.state.newPass2}
                                 onInput={this.handleInput}
                                 className="form-control"
                                 id="code1"/>
                            </div>
                            {
                                this.state.sending
                                ?
                                <button type="button" disabled  className="btn btn-primary">Please wait</button>
                                :<>
                                <button type="button" onClick={this.handleBack} className="btn btn-dark mr-2">Go back</button>
                                <button type="submit" className="btn btn-primary">continue</button>
                                </>
                            }
                        </form>
                        }
                        {
                            this.state.step === 4
                            &&
                            <div className="bg-success p-3" style={{borderRadius:"10px"}}>
                                <Link className="btn btn-dark" to="/login">Login Now</Link>
                            </div>
                        }
                </div>
            </div>
        )
    }
}
export default ForgotPassword
