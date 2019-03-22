import React from 'react'
import { withRouter } from "react-router-dom";


const LoginButton = (props) => {

   const handleClick = () =>{
       props.history.push("/login") 
   } 

    return (
        <div className="login-button">
            <button onClick={handleClick}>Log In</button>
        </div>
    )
} 

export default withRouter(LoginButton);