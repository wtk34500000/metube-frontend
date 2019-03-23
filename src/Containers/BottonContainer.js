import React from 'react'
import VideoListContainer from '../Containers/VideoContainer'
import VideoDetailContainer from '../Containers/VideoDetailContainer'

class BottonContainer extends React.Component {
  
    render(){
        return (

            <div className='botton-container'>
                <VideoDetailContainer videoUrl={this.props.videos[0]}/>
                <VideoListContainer videos={this.props.videos}/>
            </div>
    )}
}

export default BottonContainer;