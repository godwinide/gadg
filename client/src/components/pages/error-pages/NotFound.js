import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="notfound mt-4" style={{minHeight:"100vh"}}>
            <div className="container mx-auto">
            <h1 className="display-3">404 NOT FOUND</h1>
            <p class="lead">sorry we can't find the page or content you are looking for</p>
            <p>you can try:</p>
            <ul>
                <li>
                    checking the url, if you spelt it corretcly
                </li>
                <li>
                    or return to our <Link to="/">home page</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default NotFound
