import React from 'react'
import SearchBar from '../Components/SearchBar'
import Logo from '../Components/Logo'
import SignupButton from '../Components/SignupButton'
import LoginButton from '../Components/LoginButton'


const HeadContainer = (props) => {
    return (
       <div className="head-container">
        <Logo />
        <SearchBar searchTerm={props.searchTerm} handleSearch={props.handleSearch}/>
        <SignupButton />
        <LoginButton />
        {/* <button></button>
        <button></button> */}
       </div>
    )
}

export default HeadContainer;

