import React from 'react'
import VideoCard from '../Components/VideoCard'
import {withRouter } from 'react-router-dom';

class DefaultShowPage extends React.Component{
    render(){
        const arrOfVideosId = this.props.videos.map(video => <VideoCard  currentUser={this.props.currentUser} handleSelectVideo={this.props.handleSelectVideo} key={video.id.videoId} videoId={video}/>)
        const arrayOfDivs = []
        let count = 1;
        let currentArr = []
        for(let x = 0; x < arrOfVideosId.length; x++){
          if(count > 5){
            count = 1;
            arrayOfDivs.push(currentArr)
            currentArr = []
          }
          currentArr.push(arrOfVideosId[x])
          if(x === arrOfVideosId.length-1){
            arrayOfDivs.push(currentArr)
          }
          count++;
        }
        return (
            <div id="default-list-container">
            <h1>Welcome to MeTube</h1>
                {arrayOfDivs.map(videos => <div className="default-list">{videos}</div>)}
            </div>
        )
    }
}

export default withRouter(DefaultShowPage);
