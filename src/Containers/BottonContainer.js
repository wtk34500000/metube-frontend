import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import VideoListContainer from '../Containers/VideoContainer'
import VideoDetailContainer from '../Containers/VideoDetailContainer'
import History from '../Components/History'
import '../style/video.css'

class BottonContainer extends React.Component {
    state = {
        selected : '',
        histories: " ",
        video: ""
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
                "description": videoObj.snippet.description,
                "img_url": videoObj.snippet.thumbnails.medium.url
            }})
        }).then(res => res.json()).then(video => {
           this.setState({
               video: video
           },()=>{
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
            }).then(res => res.json()).then(histories => {
                this.setState({histories},()=>this.props.history.push(`/videos/${video.title}`))
            })
           })
        })
    }



    handleHisImgClick = (his) => {
       const id=his.url.split('/')[his.url.split('/').length-1]
        const video={
            id:{videoId: id},
            snippet:{description: his.description, title: his.title}
        }

       this.setState({
            selected: video
       },()=>this.props.history.push('/videos'))

    }

    render(){
        return (
            <div id='bottom-container'>
            <Switch>
                <Route path ='/videos' render={() => <VideoDetailContainer video={this.state.video} currentUser={this.props.currentUser} comments={this.state.comments} handleSubmit={this.handleSubmit} selected={this.state.selected} histories={this.state.histories}/>} />
                {/* {this.props.hisClicked? <History userHistories={this.props.userHistories}/>: <VideoListContainer currentUser={this.props.currentUser} videos={this.props.videos} handleSelectVideo={this.handleSelectVideo}/> } */}
                <Route path ='/history' render={()=> <History handleHisImgClick={this.handleHisImgClick} userHistories={this.props.userHistories}/>}/>
                <Route path='/' render={()=><VideoListContainer currentUser={this.props.currentUser} videos={this.props.videos} handleSelectVideo={this.handleSelectVideo}/> } />
              </Switch>
            </div>
    )}
}

export default withRouter(BottonContainer);
