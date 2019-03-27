import React from 'react'
import SearchBar from '../Components/SearchBar'
import Logo from '../Components/Logo'

import UserMenu from '../Components/UserMenu'

const HeadContainer = (props) => {

    return (
       <div id="head-container">
        <Logo />
        <SearchBar handleSearch={props.handleSearch} handleReset={props.handleReset}/>

       { localStorage.token ? <UserMenu handleHisClick={props.handleHisClick} currentUser={props.currentUser}/> :null}
       </div>
    )
}

export default HeadContainer;
