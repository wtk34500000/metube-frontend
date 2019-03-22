import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './Components/LoginForm'
import Signup from './Components/SignupForm'

import './App.css';

import HeadContainer from './Containers/HeadContainer'
import BottonContainer from './Containers/BottonContainer'

class App extends Component {
  state = {
    searchTerm: '',
    currentUser: {}

  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
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
      }).then(res => res.json)
      .then(json => console.log)
  }

  handleLogin = (userObj) => {
    console.log(userObj)
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="App">
          <Switch>
              <Route path ='/login' render={()=> <Login handleSubmit={this.handleLogin}/>} />
              <Route path ='/signup' render={()=> <Signup handleSubmit={this.handleSignup}/>} />
              <Route Path ='/' component={HeadContainer} />
              {/* <HeadContainer searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/> */}
              {/* <BottonContainer /> */}
          </Switch>
      </div>
    );
  }
}

export default App;
