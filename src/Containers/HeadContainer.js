import React from 'react'
import SearchBar from '../Components/SearchBar'
import Logo from '../Components/Logo'


const HeadContainer = (props) => {
    return (
       <div className="head-container">
        <Logo />
        <SearchBar searchTerm={props.searchTerm} handleSearch={props.handleSearch}/>
        {/* <button></button>
        <button></button> */}
       </div>
    )
}

export default HeadContainer;

