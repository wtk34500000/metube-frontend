import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Components/LoginForm';
import Signup from './Components/SignupForm';
import YTSearch from 'youtube-api-search';
import HomeContainer from './Containers/HomeContainer';
import './App.css';


const API_KEY=process.env.REACT_APP_KEY

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: "",
      videos: [],
      loginError: false,
      userHistories: []
    }
    this.myRef = React.createRef()
}


  componentDidMount = () => {
    let token = localStorage.token;
    this.handleReset()

    token ?
      fetch("https://metube-backend.herokuapp.com/current_user", {
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
    if(term.length > 0){
      YTSearch({key: API_KEY, term: term, maxResults: 5}, videos => {
        this.setState({
              videos :videos
            })
      })
      this.props.history.push(`/search/${term}`);
    }
    }

  handleSignup = (userObj)=>{

      fetch("https://metube-backend.herokuapp.com/users", {
        method: 'POST',
        mode: "no-cors",
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({user:{
          first_name: userObj.first_name,
          last_name: userObj.last_name,
          user_name: userObj.user_name,
          user_email: userObj.email,
          password: userObj.password
        }})
      }).then(res => console.log("return user promise",res.text()) || res.json())
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
    fetch("https://metube-backend.herokuapp.com/login", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(resp =>console.log("return user promise",res.text()) || resp.json())
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
  handleReset = () => {
    YTSearch({key: API_KEY, term: "", maxResults: 25}, videos => {
     this.setState({
       videos :videos
     })
   });
  }

  render() {
    return (
      <div className="App">
          <Switch>
              <Route path ='/login' render={()=> <Login error={this.state.loginError} handleSubmit={this.handleLogin}/>} />
              <Route path ='/signup' render={()=> <Signup handleSubmit={this.handleSignup}/>} />
              <Route path ='/' render={()=> <HomeContainer myRef={this.myRef} handleReset={this.handleReset} hisClicked={this.state.hisClicked} userHistories={this.state.userHistories} handleHisClick={this.handleHisClick} currentUser={this.state.currentUser} videos={this.state.videos} handleSearch={this.handleSearchSubmit}/>} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
