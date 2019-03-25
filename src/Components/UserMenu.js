import React from 'react'
import { withRouter } from "react-router-dom";


// *username*{props.currentUser.user_name}
const LogoutButton = (props) => {
   const handleClick = () =>{
       localStorage.removeItem("token")
       props.history.push("/signup")
   }

    return (
        <div id="user-menu">
            {props.currentUser!=="" ? props.currentUser.user_name: null}
            <button id="history"><i className="fas fa-folder"></i></button>
            <button onClick={handleClick} id="logout">Log Out</button>
        </div>
    )
}

export default withRouter(LogoutButton);
