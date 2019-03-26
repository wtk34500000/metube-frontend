import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import VideoListContainer from '../Containers/VideoContainer'
import VideoDetailContainer from '../Containers/VideoDetailContainer'
import History from '../Components/History'
import '../style/video.css'

class BottonContainer extends React.Component {
    state = {
        selected : '',
        selectedHisVideo: '',
        history: " ",
        video: " ",
        comments: []
    }

    handleSelectVideo = (videoObj, currentUser) => {
        console.log("videoobj", videoObj)
            console.log("img url", videoObj.snippet.thumbnails.medium.url)
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
            }).then(res => res.json()).then(history => {
                this.setState({history},()=>this.props.history.push(`/videos/${video.title}`))
            })
           })
        })
    }

    handleSubmit = (comment) => {

        // this.setState({
        //     comments: [...this.state.comments, comment]
        // })
         console.log("handlesubmit", comment)
            fetch("http://localhost:4000/comments", {
                method: "POST",
                headers: {
                "content-type": "application/json",
                accepts: "application/json"
                },
                body: JSON.stringify({comment:{
                    "content": comment,
                    "history_id": this.state.history.id
                }})
            }).then(res => res.json()).then(comment => this.setState({ comments: [...this.state.comments, comment]}))
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
        console.log("bottoncontainer", this.state.comments)
        return (
            <div id='bottom-container'>
            <Switch>
                <Route path ='/videos' render={() => <VideoDetailContainer currentUser={this.props.currentUser} comments={this.state.comments} handleSubmit={this.handleSubmit} selected={this.state.selected} history={this.state.history}/>} />
                {/* {this.props.hisClicked? <History userHistories={this.props.userHistories}/>: <VideoListContainer currentUser={this.props.currentUser} videos={this.props.videos} handleSelectVideo={this.handleSelectVideo}/> } */}
                <Route path ='/history' render={()=> <History handleHisImgClick={this.handleHisImgClick} userHistories={this.props.userHistories}/>}/>
                <Route path='/' render={()=><VideoListContainer currentUser={this.props.currentUser} videos={this.props.videos} handleSelectVideo={this.handleSelectVideo}/> } />
              </Switch>


            </div>
    )}
}

export default withRouter(BottonContainer);
