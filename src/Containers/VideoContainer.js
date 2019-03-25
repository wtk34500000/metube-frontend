import React from 'react'
import VideoCard from '../Components/VideoCard'

class VideoContainer extends React.Component{
    render(){
        const arrOfVideosId = this.props.videos.map(video => <VideoCard currentUser={this.props.currentUser} handleSelectVideo={this.props.handleSelectVideo} key={video.id.videoId} videoId={video}/>)
        return (
            <div className="video-list-container" id="leftCol">
                {arrOfVideosId}
            </div>
        )
    }
}

export default VideoContainer;
