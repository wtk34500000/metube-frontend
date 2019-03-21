import React, { Component } from 'react';
import Login from './Components/LoginForm'
import Signup from './Components/SignupForm'

import './App.css';

import HeadContainer from './Containers/HeadContainer'
import BottonContainer from './Containers/BottonContainer'

class App extends Component {
  state = {
    searchTerm: ''
  }
  
  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    // console.log(this.state.searchTerm)
    return (
      <div className="App">
        <HeadContainer searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
        {/* <BottonContainer /> */}
      </div>
    );
  }
}

export default App;
