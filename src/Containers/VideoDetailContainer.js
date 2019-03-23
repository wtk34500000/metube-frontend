import React from 'react'
import VideoDetail from '../Components/VideoDetail'
import CommentContainer from '../Containers/CommentContainer'

class VideoDetailContainer extends React.Component{
    render(){
        return (
            <div className="video-detail-container">
                <VideoDetail selected={this.props.selected}/>
                <CommentContainer />
            </div>
        )
    }
}

export default VideoDetailContainer;