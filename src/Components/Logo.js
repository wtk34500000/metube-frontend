import React from 'react'
import '../style/header.css';




const Logo = () => {
    return (
        <div id="logo">
          <img src={require("../img/logo.png")} alt="Logo" />
        </div>
    )
}

export default Logo;
