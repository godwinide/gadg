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
        else if(newPass != newPass2){
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
            <div className="row">
                <div className="col-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Change Password</a>
                    </div>
                </div>
                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div className="container mx-auto">
                        <ul className="list-group" style={{maxWidth:"30em"}}>
                            <li className="list-group-item">First name: {this.state.user.firstname}</li>
                            <li className="list-group-item">Last name: {this.state.user.lastname}</li>
                            <li className="list-group-item">Phone: {this.state.user.phone}</li>
                            <li className="list-group-item">Email: {this.state.user.email}</li>
                        </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <form className="form" style={{maxWidth:"30em"}} onSubmit={this.handleSubmit}>
                    <h4 className="text-center text-info">Change Password</h4>
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
                        <label for="inputPassword1">Current Password:</label>
                        <input autoComplete="current-pasword" value={this.state.currentPass} name="currentPass" onInput={this.handleInput} type="password" id="inputPassword1" className="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
                    </div>
                    <div className="form-group">
                    <label for="inputPassword2">New Password:</label>
                        <input autoComplete="new-password" value={this.state.newPass} name="newPass" onInput={this.handleInput} type="password" id="inputPassword2" className="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
                        <small id="passwordHelpInline" className="text-muted">
                        Must be 6-20 characters long.
                        </small>
                    </div>
                    <div className="form-group">
                    <label for="inputPassword3">Retype Password:</label>
                        <input autoComplete="new-password" value={this.state.newPass2} name="newPass2" onInput={this.handleInput} type="password" id="inputPassword3" className="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
                        <small id="passwordHelpInline" className="text-muted">
                        Must be 6-20 characters long.
                        </small>
                    </div>
                    {
                        this.state.sending
                        ?<button type="button" className="btn btn-secondary" style={{display: "flex", alignItems:"center"}}>Please wait {" "}
                        <div className="spinner-border" role="status" style={{width:"1em", height:"1em"}}>
                          <span className="sr-only">Loading...</span>
                        </div>
                        </button> 
                        :<button className="btn btn-primary">Update</button> 
                    }
                    </form>
                    </div>
                    </div>
                </div>
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
