import React from 'react'
import '../css/pages/loading.css'
import {connect} from 'react-redux'

const Loading = ({loading}) => {
    return (
        <div className={loading ? "loading-screen" : "hide-loading"}>
            <div className="overlay"></div>
            <div className="content">
            <h2>Loading, Please wait..</h2>
            <img src="/img/loader.svg" alt="loading"/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.loader.loading
})

export default connect(mapStateToProps)(Loading)
