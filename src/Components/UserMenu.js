import React from 'react'
import { withRouter } from "react-router-dom";


// *username*{props.currentUser.user_name}
class LogoutButton extends React.Component {
    state={
        userHistory: []
    }

    handleClick = () =>{
       localStorage.removeItem("token")
       this.props.history.push("/signup")
   }

    componentDidMount() {
      fetch("http://localhost:4000/videos").then(res => res.json()).then( videos => {
         videos.forEach(video => {
               video.histories.forEach(his => {
                  if(his.user_id === this.props.currentUser.id){
                  this.setState({
                    userHistory: [...this.state.userHistory, video]
                  })
                  }
                })
            })
      })  
   }

   handleHisClick= () => {
    this.props.history.push("/history")
    this.props.handleHisClick(this.state.userHistory)
       
   }

 render(){
    return (
        <div id="user-menu">
            {this.props.currentUser!=="" ? this.props.currentUser.user_name: null}
            <button onClick ={this.handleHisClick} id="history"><i className="fas fa-folder"></i></button>
            <button onClick={this.handleClick} id="logout">Log Out</button>
        </div>
    )}
}

export default withRouter(LogoutButton);
