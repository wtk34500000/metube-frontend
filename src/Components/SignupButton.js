import React from 'react'
import { withRouter } from "react-router-dom";


const SignupButton = (props) => {

   const handleClick = () =>{
       props.history.push("/signup") 
   } 

    return (
        <div className="signup-button">
            <button onClick={handleClick}>Sign up</button>
        </div>
    )
} 

export default withRouter(SignupButton);