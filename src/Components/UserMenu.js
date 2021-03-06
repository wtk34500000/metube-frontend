import React from 'react'
import { withRouter } from "react-router-dom";



// *username*{props.currentUser.user_name}
class UserMenu extends React.Component {
    state={
        userHistory: []
    }

    handleClick = () =>{
       localStorage.removeItem("token")
       this.props.history.push("/signup")
   }

    componentDidMount() {
      fetch("https://metube-backend.herokuapp.com/videos").then(res => res.json()).then( videos => {
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
    this.props.handleHisClick(this.state.userHistory)

   }

 render(){
    return (
        <div id="user-menu">
            <text>{this.props.currentUser!=="" ? this.props.currentUser.user_name: null}</text>
            <button onClick ={this.handleHisClick} id="history"><i className="fas fa-folder"></i></button>
            <button onClick={this.handleClick} id="logout">Log Out</button>
        </div>
    )}
}

export default withRouter(UserMenu);
