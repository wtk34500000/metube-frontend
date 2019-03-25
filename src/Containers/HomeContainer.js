import React from 'react'
import HeadContainer from './HeadContainer'
import BottonContainer from './BottonContainer'

class HomeContainer extends React.Component {

    render(){
        return (
            <div id="home-container">
              <HeadContainer currentUser={this.props.currentUser} handleSearch={this.props.handleSearch}/>
              <BottonContainer videos={this.props.videos} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default HomeContainer;
