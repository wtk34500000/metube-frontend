import React from 'react'
import HeadContainer from './HeadContainer'
import BottonContainer from './BottonContainer'
import {withRouter } from 'react-router-dom';

class HomeContainer extends React.Component {

    render(){
        return (
            <div id="home-container">
              <HeadContainer handleReset={this.props.handleReset} handleHisClick={this.props.handleHisClick} currentUser={this.props.currentUser} handleSearch={this.props.handleSearch}/>
              <BottonContainer hisClicked={this.props.hisClicked} userHistories={this.props.userHistories} videos={this.props.videos} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default withRouter(HomeContainer);
