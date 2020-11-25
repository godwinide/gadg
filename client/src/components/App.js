import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import store from '../store';
import {fetchFaculties, fetchAllCourses} from '../actions/CourseActions'
import {loadUser} from '../actions/AuthActions'
import {getCartItems} from '../actions/CartActions'

import Navbar from './layouts/header/Navbar'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import CourseDetail from './pages/course-detail/CourseDetail'
import Login from './pages/login/Login'
import MyCourses from './pages/myCourses/MyCourses'
import Signup from './pages/signup/Signup'
import ViewCourse from './pages/viewcourse/ViewCourse'
import Checkout from './pages/cart/Checkout'
import Loading from '../loader/Loading'
import Footer from './layouts/header/Footer'
import Faculty from './pages/faculty/Faculty';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import Contact from './pages/contact/Contact';
import NotFound from './pages/error-pages/NotFound';



const  App = () => {
    useEffect(()=>{
        store.dispatch(loadUser());
        store.dispatch(fetchFaculties());
        store.dispatch(fetchAllCourses());
        store.dispatch(getCartItems());
    },[])
    
    
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/faculty/:id" component={Faculty} />
                <Route exact path="/view-course/:id/" component={CourseDetail} />
                <Route exact path="/cart" component={Cart} />
                <PrivateRoute exact path="/checkout" component={Checkout} />
                <PrivateRoute exact path="/my-courses" component={MyCourses} />
                <PrivateRoute exact path="/my-courses/view/:id/:chapter" component={ViewCourse} />
                <ForwardAuthenticated exact path="/login" component={Login} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <ForwardAuthenticated exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/profile" component={Profile}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact} />
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer/>
            <Loading/>
        </Router>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => store.getState().auth.isAuthenticated
    ? <Component {...props} /> : <Redirect to="/login"/>}
    />
)

const ForwardAuthenticated = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => store.getState().auth.isAuthenticated
    ?<Redirect to="/"/>:<Component {...props}/>}
    />
)

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(App)
