import React from 'react'
import { Link } from 'react-router-dom'
import  '../../../css/pages/login.css';
import {connect} from 'react-redux'
import {login} from '../../../actions/AuthActions';


class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state;
        const user = {email, password};
        this.props.login(user, this.props.history.push);
    };

    componentDidUpdate(prevProps){
        const {error} = this.props;
        if(error.id !== prevProps.error.id){
            if(error.id === 'LOGIN_FAIL'){
                this.setState({ ...this.state, msg: error.msg.errors[0].msg})
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0
            }else{
                this.setState({...this.state, msg: null})
            }
        }
    }
    
    render(){
    return (
        <div className="login-wrap">
            <div className="container login">
            <h2>Login to your GadgAcademia account</h2>
            <hr/> 
            { this.state.msg
                    && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{this.state.msg}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
            <form onSubmit={this.handleSubmit}>
                <div className="form align-items-center">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="far fa-envelope"></i></div>
                        <input onInput={this.handleInput} type="text" className="form-control" name="email" placeholder="email"/>
                    </div>
                    </div>
                    
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="far fa-lock"></i></div>
                        <input onInput={this.handleInput} name="password" type="password" className="form-control" placeholder="Password"/>
                    </div>
                    </div>
                    
                    <div className="input-group">
                        <button className="btn login-btn">Login</button>
                    </div>
                    <div className="input-group">
                        <span>or <Link to="forgot-password">forgot password?</Link></span>
                    </div>
                    <div className="input-group">
                        <span>Don't have an account? <b><Link to="signup">Signup</Link></b></span>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}
}

const mapStateToProps = state => ({
    error: state.error
});

export default connect(mapStateToProps, {login})(Login)
