import React from 'react'
import VideoListContainer from '../Containers/VideoContainer'
import VideoDetailContainer from '../Containers/VideoDetailContainer'

class BottonContainer extends React.Component {
    state = {
        selected : ''
    }

    handleSelectVideo = (videoObj) => {
            this.setState({
                selected: videoObj
            })
    }

    render(){
        return (
            <div id='botton-container'>
                <VideoDetailContainer selected={this.state.selected}/>
                <VideoListContainer videos={this.props.videos} handleSelectVideo={this.handleSelectVideo}/>
            </div>
    )}
}

export default BottonContainer;
