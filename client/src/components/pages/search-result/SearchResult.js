import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../../css/pages/search-result.css"
import SearchResultSkeleton from './SearchResultSkeleton'
import axios from 'axios'
import query from 'query-string'

const SearchResult = (props) => {
    const [courseLoading, setCourseLoading] = useState(true);
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortby, setSortby] = useState("price-low");

    useEffect(()=>{
        const searchText = query.parse(props.location.search).q || "";
        setSearchQuery(searchText);
        axios.get("/api/courses/search?q="+searchText)
        .then(res => {
            setCourses(res.data.courses);
            setCourseLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    useEffect(()=>{
        if(sortby === 'price-low'){
            const sorted = courses.sort((a,b) => a.price < b.price ? 1:-1);
            setCourses(sorted);
        }
        else if(sortby === 'price-high'){
            const sorted = courses.sort((a,b) => a.price > b.price ? 1:-1);
            setCourses(sorted);
        }else{
            setCourses(courses);
        }
    },[sortby])

    const handleSort = e => {
        setSortby(e.target.value);
    };

    return (
        courseLoading
        ?<SearchResultSkeleton/>
        :courses.length === 0
        ? <p className="lead text-center search">Sorry, your search {searchQuery} did not return any result</p>
        :<div className="search">
            <h1 className="result-title"><span>{courses.length} Result{courses.length > 1 ? "s" : ""} for</span> `CSC 110`</h1>
            <div className="results-wrap">
                <div className="filter-wrap">
                    <form>
                        <div className="form-group col-md-4">
                            <select onInput={handleSort} id="inputState" className="form-control">
                                <option value="">Sort</option>
                                <option value="price-low">Price - Low to High</option>
                                <option value="price-high">Price - High to Low</option>
                            </select>
                        </div>
                    </form>
                    <div className="results">
                        {
                            courses.map((course,key) => (
                                <Link to={"/view-course/"+course.titleSlug} key={key}>
                                <div className="course-item mb-2">
                                    <div className="image-wrap">
                                        <img src={course.thumbnail} alt="course-image"/>
                                    </div>
                                    <div className="course-info">
                                        <p className="course-title truncate">{course.title}</p>
                                        <p className="course-author">By {course.instructor}</p>
                                        <p className="course-price" style={{textTransform:"capitalize"}}>N{course.price}</p>
                                    </div>
                                </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult