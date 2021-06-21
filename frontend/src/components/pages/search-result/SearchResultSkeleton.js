import React from 'react'
import Skeleton from 'react-loading-skeleton'
import "../../../css/pages/search-result.css"


const SearchResultSkeleton = () => {
    return (
        <div className="search">
            <Skeleton height="3em" width="20em"/>
            <div className="results-wrap">
                <div className="filter-wrap">
                    <Skeleton width="15em" height="5em" />
                    <div className="results">
                        <Skeleton width="40em" height="15em" />
                        <Skeleton width="40em" height="15em" />
                        <Skeleton width="40em" height="15em" />
                        <Skeleton width="40em" height="15em" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultSkeleton