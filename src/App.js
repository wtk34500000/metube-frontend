import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './Components/LoginForm'
import Signup from './Components/SignupForm'
import YTSearch from 'youtube-api-search'

import './App.css';

import HomeContainer from './Containers/HomeContainer'




// const API_KEY="AIzaSyCPDRj-AZPLJJaaB6z8WUmVKmdvHIpPHZo";

// YTSearch({key:API_KEY, term: term}, (videos)=>{
//   this.setState({
//     videos :videos,
//     selectedVideo:videos[0]
//   })
// });
const API_KEY=process.env.REACT_APP_KEY

class App extends Component {
  state = {
    // searchTerm: '',
    currentUser: {},
    videos: []
    
  }
  
  // componentDidMount(){
  //   axios.creat({
  //     baseURL: 'https://www.googleapis.com/youtube/v3/',
  //     params:{
  //       part: 'snipet',
  //       maxResults: 5,
  //       key: process.env.REACT_APP_KEY
  //     }
  //   })
  // }

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
      console.log(userObj)
  }

  handleLogin = (userObj) => {
    console.log(userObj)
  }

  render() {
    console.log(this.state.videos)
    // console.log("api key", process.env.REACT_APP_KEY)
    return (
      <div className="App">
          <Switch>
              <Route path ='/login' render={()=> <Login handleSubmit={this.handleSignup}/>} />
              <Route path ='/signup' render={()=> <Signup handleSubmit={this.handleLogin}/>} />
              <Route Path ='/' render={()=> <HomeContainer videos={this.state.videos} handleSearch={this.handleSearchSubmit}/>} />
              {/* <HeadContainer searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/> */}
              {/* <BottonContainer /> */}
          </Switch>
      </div>
    );
  }
}

export default App;
