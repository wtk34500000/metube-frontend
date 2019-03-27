import React from 'react'
import VideoCard from '../Components/VideoCard'
import {withRouter } from 'react-router-dom';

class VideoContainer extends React.Component{
    render(){
        const arrOfVideosId = this.props.videos.map(video => <VideoCard  currentUser={this.props.currentUser} handleSelectVideo={this.props.handleSelectVideo} key={video.id.videoId} videoId={video}/>)
        return (
            <div id="video-list-container">
                {arrOfVideosId}
            </div>
        )
    }
}

export default withRouter(VideoContainer);
