import React from 'react'
import SearchBar from '../Components/SearchBar'
import Logo from '../Components/Logo'
import SignupButton from '../Components/SignupButton'
import LoginButton from '../Components/LoginButton'


const HeadContainer = (props) => {

    // componentDidMount(){
    //     fetch('http://localhost:4000/users')
    //     .then(res => res.json())
    //     .then(console.log)
    // }

    return (
       <div className="head-container">
        <Logo />
        <SearchBar handleSearch={props.handleSearch}/>
        <SignupButton />
        <LoginButton />
        {/* <button></button>
        <button></button> */}
       </div>
    )
}

export default HeadContainer;

