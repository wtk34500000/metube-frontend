import React from 'react'
import { withRouter } from "react-router-dom";


const LogoutButton = (props) => {
   const handleClick = () =>{
       localStorage.removeItem("token")
       props.history.push("/signup") 
   } 

    return (
        <div className="logout-button">
            <p>Welcome: {props.currentUser.user_name} </p>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
} 

export default withRouter(LogoutButton);