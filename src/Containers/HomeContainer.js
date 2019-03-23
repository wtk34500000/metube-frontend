import React from 'react'
import HeadContainer from './HeadContainer'
import BottonContainer from './BottonContainer'

class HomeContainer extends React.Component {

    render(){
        return (
            <div className="home-container">
              <HeadContainer currentUser={this.props.currentUser} handleSearch={this.props.handleSearch}/>
              <hr />
              <BottonContainer videos={this.props.videos}/> 
            </div>
        )
    }
}

export default HomeContainer;
