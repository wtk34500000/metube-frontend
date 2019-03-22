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
      console.log(userObj)
  }

  handleLogin = (userObj) => {
    console.log(userObj)
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="App">
          <Switch>
              <Route path ='/login' render={()=> <Login handleSubmit={this.handleSignup}/>} />
              <Route path ='/signup' render={()=> <Signup handleSubmit={this.handleLogin}/>} />
              <Route Path ='/' component={HeadContainer} />
              {/* <HeadContainer searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/> */}
              {/* <BottonContainer /> */}
          </Switch>
      </div>
    );
  }
}

export default App;
