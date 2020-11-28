import React, {Component } from 'react'
import store from '../../../store'
import {connect} from 'react-redux'
import ProfileSkeleton from './ProfileSkeleton'
import  '../../../css/pages/profile.css'
import axios from 'axios';

class Profile extends Component  {
    state = {
        loading: true,
        user: "",
        successMsg: "",
        errorMsg: "",
        currentPass: "",
        newPass: "",
        newPass2: "",
        sending: false
    }

    componentDidMount(){
        const user = this.props.user;
        if(user) this.setState({
            ...this.state,
            loading: false,
            user
        });
    }
    componentDidUpdate(prevProps){
        if(this.props.user !== prevProps.user){
            const user = this.props.user;
            if(user) this.setState({
                ...this.state,
                loading: false,
                user
            });
        }
    }

    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({errorMsg:"", successMsg:""})
        const {currentPass, newPass, newPass2} = this.state;
        if(newPass.length < 6 || newPass.length > 20 || currentPass.length < 6 || currentPass.length > 20){
            this.setState({
                ...this.state,
                errorMsg: "Password length should be between 6 - 20 characters long." 
            })
            return;
        }
        else if(newPass !== newPass2){
            this.setState({
                ...this.state,
                errorMsg: "Both passwords are not thesame"
            })
            return;
        }else{
            this.setState({
                ...this.state,
                sending: true,
                errorMsg: ""
            })
            const config = {
                headers:{
                    'Content-type': 'application/json',
                    'x-auth-token': store.getState().auth.token
                }
            }
            const body = {
                currentPass,
                newPass,
                newPass2
            }
            axios.post(`/api/users/auth/changePassword`, body, config)
            .then(res => {
                this.setState({
                    ...this.state,
                    sending: false,
                    successMsg: res.data.msg,
                    currentPass:"",
                    newPass: "",
                    newPass2: ""
                })
            })
            .catch(err => {
                this.setState({
                    ...this.state,
                    sending: false,
                    errorMsg: err.response.data.msg
                })
            })
        }
    };

    render(){
    return (
        this.state.loading
        ? ProfileSkeleton
        :<div className="profile-wrap">
            <div className="profile">
                <div className="container">
                <ul className="list-group mx-auto" style={{maxWidth:"30em"}}>
                    <li className="list-group-item">First name: {this.state.user.firstname}</li>
                    <li className="list-group-item">Last name: {this.state.user.lastname}</li>
                    <li className="list-group-item">Phone: {this.state.user.phone}</li>
                    <li className="list-group-item">Email: {this.state.user.email}</li>
                </ul>
                <form className="form mt-5" style={{maxWidth:"30em", margin:"2em auto"}} onSubmit={this.handleSubmit}>
                    <p className="text-center lead">Change Password</p>
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
                    <div className="form-group">
                        <input autoComplete="current-pasword" value={this.state.currentPass} name="currentPass" onInput={this.handleInput} type="password" id="inputPassword1" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" placeholder="current password"/>
                    </div>
                    <div className="form-group">
                        <input autoComplete="new-password" value={this.state.newPass} name="newPass" onInput={this.handleInput} type="password" id="inputPassword2" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" placeholder="new password"/>
                    </div>
                    <div className="form-group">
                        <input autoComplete="new-password" value={this.state.newPass2} name="newPass2" onInput={this.handleInput} type="password" id="inputPassword3" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" placeholder="retype password"/>
                    </div>
                   <div className="form-group">
                   {
                        this.state.sending
                        ?<button type="button" className="btn btn-secondary" style={{display: "flex", alignItems:"center"}}>Please wait {" "}
                        <div className="spinner-border" role="status" style={{width:"1em", height:"1em"}}>
                          <span className="sr-only">Loading...</span>
                        </div>
                        </button> 
                        :<button className="btn btn-primary">Update</button> 
                    }
                   </div>
                </form>
            </div>
        </div>
    </div>
    )
}
}
const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Profile)
