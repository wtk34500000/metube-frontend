import React from 'react'
import VideoDetail from '../Components/VideoDetail'
import CommentContainer from '../Containers/CommentContainer'
import { withRouter } from 'react-router-dom';

class VideoDetailContainer extends React.Component{
    render(){
        return (
            <div id="video-detail-container">
            {!this.props.selected ?
              this.props.history.push("/")
              : null
            }
                <VideoDetail selected={this.props.selected}/>
                <CommentContainer video={this.props.video} currentUser={this.props.currentUser} histories={this.props.histories} comments={this.props.comments} handleSubmit={this.props.handleSubmit} />
            </div>
        )
    }
}

export default withRouter(VideoDetailContainer);
