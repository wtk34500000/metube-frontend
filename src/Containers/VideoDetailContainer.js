import React from 'react'
import VideoDetail from '../Components/VideoDetail'
import CommentContainer from '../Containers/CommentContainer'

class VideoDetailContainer extends React.Component{
    render(){
        return (
            <div className="video-detail-container">
                <VideoDetail selected={this.props.selected}/>
                <CommentContainer video={this.props.video} history={this.props.history} comments={this.props.comments} handleSubmit={this.props.handleSubmit} history={this.props.history}/>
            </div>
        )
    }
}

export default VideoDetailContainer;