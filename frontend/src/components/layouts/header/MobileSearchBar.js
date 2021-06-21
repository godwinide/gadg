import React from 'react'
import '../../../css/layout/mobile-search.css'

const MobileSearchBar = ({visible, handleOpenSearch}) => {
    return (
        <div className={ `mobile-search-bar ${visible && "visible"}`}>
            <div className="search-bar">
                <i onClick={handleOpenSearch} className="fas fa-arrow-left"></i>
                <form action="/search">
                <input type="text" name="q" id="m-search" autoFocus placeholder="search anything"/>
                <button>
                    <i className="far fa-search"></i>
                </button>
                </form>
            </div>
        </div>
    )
}

export default MobileSearchBar
