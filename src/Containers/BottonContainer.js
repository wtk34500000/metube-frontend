import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import VideoListContainer from '../Containers/VideoContainer'
import VideoDetailContainer from '../Containers/VideoDetailContainer'
import '../style/video.css'

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
                this.setState({history},()=>this.props.history.push(`/videos/${video.title}`))
            })
        })
    }

    render(){
        return (
            <div id='bottom-container'>
            <switch>
                <Route path ='/videos' render={() => <VideoDetailContainer selected={this.state.selected} history={this.state.history}/>} />
              </switch>
              <VideoListContainer currentUser={this.props.currentUser} videos={this.props.videos} handleSelectVideo={this.handleSelectVideo}/>
            </div>
    )}
}

export default withRouter(BottonContainer);
