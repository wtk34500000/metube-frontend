import React from 'react'
import '../style/header.css';
import { withRouter } from "react-router-dom";



const Logo = (props) => {
    return (
        <div id="logo">
          <img src={require("../img/logo.png")} alt="Logo" onClick={() => props.history.push("/")}/>
        </div>
    )
}

export default withRouter(Logo);
