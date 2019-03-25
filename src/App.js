import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/LoginForm';
import Signup from './Components/SignupForm';
import YTSearch from 'youtube-api-search';
import HomeContainer from './Containers/HomeContainer';
import { withRouter } from "react-router-dom";
import './App.css';


const API_KEY=process.env.REACT_APP_KEY

class App extends Component {
  state = {
    currentUser: " ",
    videos: [],
    loginError: false
  }

  componentDidMount(){
    let token = localStorage.token;

    token ?
    fetch("http://localhost:4000/user", {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
         Authorization: `${token}`
      }})
    .then(resp => resp.json())
          .then(user => {
            this.setState({ user }, () => {
              console.log(user);
              this.props.history.push("/");
            });
          })
    :
    this.props.history.push("/signup");
  }

  handleSearchSubmit = (term) => {
      console.log(term)
      console.log(typeof API_KEY)
      YTSearch({key: API_KEY, term: term}, videos => {
        this.setState({
              videos :videos,
            })
      })

  }

  handleSignup = (userObj)=>{
      fetch("http://localhost:4000/users", {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify({user:{
          first_name: userObj.first_name,
          last_name: userObj.last_name,
          user_name: userObj.user_name,
          user_email: userObj.email,
          password: userObj.password
        }})
      }).then(res => res.json())
      .then(currentUser => {
        this.setState({currentUser}, () => {
          this.props.history.push('/')
          localStorage.setItem("token", currentUser.id)
        })
      })
  }

  handleLogin = (user) => {
    this.setState({loginError:false})
    fetch("http://localhost:4000/login", {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({user})
    })
    .then(res => res.json())
    .then(user => {
            this.setState({ user }, () => {
              console.log(user);
              localStorage.setItem("token", user.id)
              this.props.history.push("/");
            });
          })
          .catch(error => { this.setState({loginError: true})})
    }

  render() {
    return (
      <div className="App">
          <Switch>
              <Route path ='/login' render={()=> <Login error={this.state.loginError} handleSubmit={this.handleLogin}/>} />
              <Route path ='/signup' render={()=> <Signup handleSubmit={this.handleSignup}/>} />
              <Route path ='/' render={()=> <HomeContainer currentUser={this.state.currentUser} videos={this.state.videos} handleSearch={this.handleSearchSubmit}/>} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
