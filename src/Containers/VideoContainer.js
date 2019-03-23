import React from 'react'
import VideoCard from '../Components/VideoCard'

class VideoContainer extends React.Component{
    render(){
        const arrOfVideosId = this.props.videos.map(video => <VideoCard handleSelectVideo={this.props.handleSelectVideo} key={video.id.videoId} videoId={video}/>)
        return (
            <div className="video-list-container" id="leftCol">
                <h1>Video list Container</h1>
                {arrOfVideosId}
            </div>
        )
    }
}

export default VideoContainer;