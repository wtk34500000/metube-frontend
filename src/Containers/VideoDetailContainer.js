import React from 'react'
import VideoDetail from '../Components/VideoDetail'
import CommentContainer from '../Containers/CommentContainer'

class VideoDetailContainer extends React.Component{
    render(){
        return (
            <div className="video-detail-container">
                <h1>Video detail Container</h1>
                <VideoDetail />
                <CommentContainer />
            </div>
        )
    }
}

export default VideoDetailContainer;