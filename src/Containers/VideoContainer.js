import React from 'react'
import VideoCard from '../Components/VideoCard'

class VideoContainer extends React.Component{
    render(){
        const arrOfVideosId = this.props.videos.map(video => <VideoCard key={video.id.videoId} videoId={video.id.videoId}/>)
        return (
            <div className="video-list-container">
                <h1>Video list Container</h1>
                {arrOfVideosId}
            </div>
        )
    }
}

export default VideoContainer;