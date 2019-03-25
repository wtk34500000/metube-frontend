import React from 'react'
import VideoListContainer from '../Containers/VideoContainer'
import VideoDetailContainer from '../Containers/VideoDetailContainer'

class BottonContainer extends React.Component {
    state = {
        selected : '',
        history: " "
    }
    
    handleSelectVideo = (videoObj, currentUser) => {
            this.setState({
                selected: videoObj
            })

            fetch("http://localhost:4000/videos", {
            method : 'POST',
            headers: {
                'content-type': 'application/json',
                 accepts: "application/json"
            },
            body: JSON.stringify({video:{
                "title": videoObj.snippet.title,
                "url": `https://www.youtube.com/embed/${videoObj.id.videoId}`,
                "description": videoObj.snippet.description
            }})
        }).then(res => res.json()).then(video => {
            console.log("video Created",video)
            console.log("currentUser", currentUser)
           
            fetch('http://localhost:4000/histories', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                     accepts: "application/json"
                },
                body: JSON.stringify({history: {
                    "user_id": currentUser.id,
                    "video_id": video.id
                }})
            }).then(res => res.json()).then(history => {
                this.setState({history},()=>console.log(this.state.history))
            }) 
        })
    }

    render(){
        return (
            <div className='botton-container'>
                <VideoDetailContainer selected={this.state.selected} history={this.state.history}/>
                <VideoListContainer currentUser={this.props.currentUser} videos={this.props.videos} handleSelectVideo={this.handleSelectVideo}/>
            </div>
    )}
}

export default BottonContainer;