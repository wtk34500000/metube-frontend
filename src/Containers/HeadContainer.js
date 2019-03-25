import React from 'react'
import SearchBar from '../Components/SearchBar'
import Logo from '../Components/Logo'
import SignupButton from '../Components/SignupButton'
import LoginButton from '../Components/LoginButton'
import UserMenu from '../Components/UserMenu'

const HeadContainer = (props) => {

    // componentDidMount(){
    //     fetch('http://localhost:4000/users')
    //     .then(res => res.json())
    //     .then(console.log)
    // }

    return (
       <div id="head-container">
        <Logo />
        <SearchBar handleSearch={props.handleSearch}/>
       { !localStorage.token ? <SignupButton /> : null}
       { !localStorage.token ? <LoginButton /> : null}
       { localStorage.token ? <UserMenu currentUser={props.currentUser}/> :null}
       </div>
    )
}

export default HeadContainer;
