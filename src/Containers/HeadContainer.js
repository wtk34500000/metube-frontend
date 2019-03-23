import React from 'react'
import SearchBar from '../Components/SearchBar'
import Logo from '../Components/Logo'
import SignupButton from '../Components/SignupButton'
import LoginButton from '../Components/LoginButton'
import LogoutButton from '../Components/LogoutButton'

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
       { !localStorage.token ? <SignupButton /> : null}
       { !localStorage.token ? <LoginButton /> : null}
       { localStorage.token ? <LogoutButton currentUser={props.currentUser}/> :null}
       </div>
    )
}

export default HeadContainer;

