import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  '../../../css/pages/course-details.css'
import CourseDetailSkeleton from './CourseDetailSkeleton'
import {addItemToCart} from '../../../actions/CartActions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import NotFound from '../error-pages/NotFound';

const CourseDetail = ({match:{params:{id}}, addItemToCart, cart}) =>{

    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [course, setCourse] = useState({})
    const [incart, setInCart] = useState(false);
    const [price, setPrice] = useState(0);
    const [customTopics, setCustomTopics] = useState([]);

    useEffect(()=> {
        async function _fetchCourse(){
            axios.get("/api/courses/one/"+id)
                .then(res => {
                    if(!res.data.course){
                        setNotFound(true);
                        setLoading(false)
                        return
                    }else{
                        setLoading(false)
                        setCourse(res.data.course)
                        const topics = res.data.course.topics;
                        topics.map(top => {
                            return top.locked = true;
                        })
                        setCustomTopics(topics);
                    }
                })
                .catch(() =>{
                    setLoading(false);
                    setNotFound(true);
                })
        }
        _fetchCourse()
        const isIncart = cart.some(item => item._id === course._id)
        setInCart(isIncart);
    }, [cart])

    const handleAddToCart = () => {
        const newCourse = course;
        newCourse.price = course.discountPrice;
        setCourse(newCourse);
        addItemToCart(course)
    }
    const handleAddToCart2 = () => {
        if(price > 0){
            const customizedCourse = {...course, topics: customTopics, price};
            addItemToCart(customizedCourse);
        }
    }

    const handleCheckTopic = e => {
        const checked = e.target.checked;
        const id = e.target.dataset.id;
        customTopics.map(c => {
            if(c.id === id){
                c.locked = !checked;
                if(c.locked){
                    setPrice(price-Number(c.price))
                }else{
                    setPrice(price+Number(c.price))
                }
            }
        })
    }
    return (
        loading
        ?<CourseDetailSkeleton/>
        : notFound
        ? <NotFound/>
        :<div className="course-detail">
            <div className="preview row">
                <div className="prev col-md-6">
                    <div className="overlay"></div>
                    <div className="preview-image">
                        <img src={course.thumbnail} alt="preview"/>
                    </div>
                </div>
                <div className="brief col-md-6">
                    <h1>{course.title}</h1>
                    <h3>{course.sort_desc}</h3>
                    <div className="author mb-2">
                        <h3 style={{display:"inline"}}>By {course.instructor}</h3>
                    </div>
                    <div className="actions">
                        <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="onetime-tab" 
                                data-toggle="tab" href="#onetime" 
                                role="tab" aria-controls="onetime"
                                 aria-selected="true">Full Payment</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="custom-tab"
                                 data-toggle="tab" href="#custom" 
                                 role="tab" aria-controls="custom"
                                  aria-selected="false">Customize</a>
                            </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="onetime" role="tabpanel" aria-labelledby="onetime-tab">
                                    <p className="text-white">
                                        Full Payment with all course videos and files with discount 
                                    </p>
                                    <div className="price-wrap">
                                        <h2>₦{course.discountPrice} (25% off)</h2>
                                        <h4 className="discount">₦{course.price}</h4>
                                    </div>
                                    <div className="actions">
                                    {
                                        incart
                                        ?<Link to="/cart" className="btn btn-info">
                                        <i className="far fa-shopping-cart"></i>
                                        {" "}Go to Cart</Link>
                                        :<button className="btn" onClick={handleAddToCart}>
                                        <i className="far fa-shopping-cart"></i>
                                        Add to Cart</button>
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="custom" role="tabpanel" aria-labelledby="custom-tab">
                                <p> <i className="fas fa-info bg-warning p-2" style={{borderRadius:"50%"}}></i>{" "}
                                    You won't get a discount</p>
                                <div className="price-wrap">
                                    <h2>₦{price}</h2>
                                </div>
                                <div className="actions">
                                    {
                                        incart
                                        ?<Link to="/cart" className="btn btn-info">
                                        <i className="far fa-shopping-cart"></i>
                                        {" "}Go to Cart</Link>
                                        :<button className="btn" onClick={handleAddToCart2}>
                                        <i className="far fa-shopping-cart"></i>
                                        Add to Cart</button>
                                    }
                                </div>
                                <div className="course-list-wrap mt-4">
                                    <p>check at least one topic you want to purchase</p>
                                    <ul className="list-group list-group-flush courselist">
                                        {
                                            course.topics
                                            &&course.topics.map((topic, i) => (
                                                <li 
                                                class="list-group-item list-group-item-dark"
                                                 key={i} style={{borderRadius:"10px", marginBottom:".4em", color:"#fff", background:"#000"}}>
                                                <div class="custom-control custom-checkbox">
                                                <input onInput={handleCheckTopic}
                                                    data-id={topic.id}
                                                    type="checkbox" 
                                                    class="custom-control-input"
                                                    id={"check"+(+i+1)} />
                                                  <label class="custom-control-label" htmlFor={"check"+(+i+1)}>{i+1} {topic.title}</label>
                                                </div>
                                             </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="container mb-5">
            <div className="course-description mt-5">
                    <h2>Course description</h2>
                    <p>{course.description}</p>
                </div>
                <div className="course-content mt-5">
                    <h2>Course Content</h2>
                    <ul class="list-group">
                        {
                            course.topics
                            && course.topics.map((topic, n) => (
                                <li class="list-group-item">{n+1}. {topic.title}</li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps, {addItemToCart})(CourseDetail)
