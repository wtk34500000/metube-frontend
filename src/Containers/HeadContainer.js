import React from 'react'
import SearchBar from '../Components/SearchBar'
import Logo from '../Components/Logo'
import SignupButton from '../Components/SignupButton'
import LoginButton from '../Components/LoginButton'
import UserMenu from '../Components/UserMenu'

const HeadContainer = (props) => {

    return (
       <div id="head-container">
        <Logo />
        <SearchBar handleSearch={props.handleSearch}/>
       {/* { !localStorage.token ? <SignupButton /> : null}
       { !localStorage.token ? <LoginButton /> : null} */}
       { localStorage.token ? <UserMenu handleHisClick={props.handleHisClick} currentUser={props.currentUser}/> :null}
       </div>
    )
}

export default HeadContainer;
