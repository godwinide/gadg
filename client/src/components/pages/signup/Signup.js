import React from 'react'
import { Link } from 'react-router-dom'
import  '../../../css/pages/login.css';
import {connect} from 'react-redux'
import {register} from '../../../actions/AuthActions'


class Signup extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        password2: "",
        showError: false,
        msg: null
    };

    handleInput = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {firstname, lastname, email, phone, password, password2} = this.state;
        const newUser = {firstname, lastname, email, phone, password2, password};
        this.props.register(newUser);
    };
    componentDidUpdate(prevProps){
        const {error, auth} = this.props;
        if(error.msg !== prevProps.error.msg){
            if(error.id === 'REGISTER_FAIL'){
                this.setState({ ...this.state, showError:true, msg: error.msg.errors[0].msg});
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0
            }
        }
        if(auth.isAuthenticated){
            this.props.history.push("/")
        }
    }

    render(){
    return (
        <div className="login-wrap">
            <div className="container login">
            <h4>Signup</h4>
            <hr/> 
            <form onSubmit={this.handleSubmit}>
                { this.state.msg
                    && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{this.state.msg}</strong>
                    </div>
                }
                <div className="form align-items-center">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="far fa-user"></i></div>
                        <input required type="text" name="firstname" className="form-control" placeholder="First Name" onInput={this.handleInput} />
                    </div>
                    </div>
                    
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="far fa-user"></i></div>
                        <input required type="text" name="lastname" className="form-control" placeholder="Last Name" onInput={this.handleInput} />
                    </div>
                    </div>

                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="far fa-envelope"></i></div>
                        <input required type="text" name="email" className="form-control" placeholder="Email" onInput={this.handleInput} />
                    </div>
                    </div>

                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="far fa-phone"></i></div>
                        <input required type="number" name="phone" className="form-control" placeholder="Phone" onInput={this.handleInput} />
                    </div>
                    </div>

                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="far fa-lock"></i></div>
                        <input required type="password" name="password" className="form-control" placeholder="Password" onInput={this.handleInput} />
                    </div>
                    </div>

                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="far fa-lock"></i></div>
                        <input required type="password" name="password2" className="form-control" placeholder="Retype Password" onInput={this.handleInput} />
                    </div>
                    </div>
                    
                    <div className="input-group">
                        <button className="btn btn-info">Signup</button>
                    </div>
                    <div className="input-group">
                        <span>Already have an account? <b><Link to="/login">Login</Link></b></span>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}
}

const mapStateToProps = state => ({
    error: state.error,
    auth: state.auth
})

export default connect(mapStateToProps, {
    register
})(Signup)
