import React from 'react'
import '../style/header.css'
const Logo = () => {
    return (
        <div className="logo">
            <img src={require('../img/logo.png')} alt="Logo" className="logo-img"/>
        </div>
    )
}

export default Logo;
