import React from 'react'
import VideoListContainer from '../Containers/VideoContainer'
import VideoDetailContainer from '../Containers/VideoDetailContainer'

class BottonContainer extends React.Component {
  
    render(){
        let selectedVideoUrl;
        if(this.props.videos.length >0){
            selectedVideoUrl=`https://www.youtube.com/watch?v=${this.props.videos[0].id.videoId}`;
        }
        console.log('selectedID', selectedVideoUrl)
        return (
           
            <div className='botton-container'>
                <VideoDetailContainer videoUrl={this.props.videos[0]}/>
                <VideoListContainer />
            </div>
    )}
}

export default BottonContainer;