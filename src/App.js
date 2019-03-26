import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Components/LoginForm';
import Signup from './Components/SignupForm';
import YTSearch from 'youtube-api-search';
import HomeContainer from './Containers/HomeContainer';
import './App.css';


const API_KEY=process.env.REACT_APP_KEY

class App extends Component {
  state = {
    currentUser: "",
    videos: [],
    loginError: false,
    userHistories:[],
    hisClicked: false

  }

  componentDidMount = () => {
    let token = localStorage.token;

    token
      ? fetch("http://localhost:4000/current_user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(currentUser => {
            this.setState({ currentUser: currentUser.user }, () => {
              this.props.history.push("/");
            });
          })
      : this.props.history.push("/signup");
  };

  handleSearchSubmit = (term) => {
      YTSearch({key: API_KEY, term: term, maxResults: 5}, videos => {
        console.log(videos)
        this.setState({
              videos :videos
            })
      })
      this.props.history.push("/");
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
        console.log("return ",currentUser)

        this.setState({currentUser: currentUser.user}, () => {
          localStorage.setItem("token", currentUser.jwt);
          this.props.history.push('/')
        })
      })

  }

  handleLogin = (user) => {
    this.setState({loginError:false})
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(currentUser => {
        this.setState({currentUser: currentUser.user}, () => {
          localStorage.setItem("token", currentUser.jwt)
          this.props.history.push('/')
        })
      })
  }

  handleHisClick = (historiesArr) =>{
    console.log('inside appjs',historiesArr)
    this.setState({
      hisClicked: !this.state.hisClicked,
      userHistories: historiesArr
    })
  }

  render() {
    return (
      <div className="App">
          <Switch>
              <Route path ='/login' render={()=> <Login error={this.state.loginError} handleSubmit={this.handleLogin}/>} />
              <Route path ='/signup' render={()=> <Signup handleSubmit={this.handleSignup}/>} />
              <Route path ='/' render={()=> <HomeContainer hisClicked={this.state.hisClicked} userHistories={this.state.userHistories} handleHisClick={this.handleHisClick} currentUser={this.state.currentUser} videos={this.state.videos} handleSearch={this.handleSearchSubmit}/>} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
