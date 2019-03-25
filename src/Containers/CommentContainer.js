import React from 'react'
import Comment from '../Components/Comment'
import InputComment from '../Components/InputComment'
import '../style/video.css'

class CommentContainer extends React.Component {
    // state ={
    //     comments: []
    // }

    // handleSubmit = (comment) => {
       
    //     this.setState({
    //         comments: [...this.state.comments, comment]
    //     })
         
    //     // console.log(this)
    //         fetch("http://localhost:4000/comments", {
    //             method: "POST",
    //             headers: {
    //             "content-type": "application/json",
    //             accepts: "application/json"
    //             },
    //             body: JSON.stringify({comment:{
    //                 "content": comment,
    //                 "history_id": this.props.history.id
    //             }})
    //         }).then(res => res.json()).then(console.log)
    // }

    render(){
        return (
            <div id='comment-container'>
                <div id="comment-header">comment area</div>
                <Comment video={this.props.video} history={this.props.history} comments={this.props.comments}/>
                <InputComment handleSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}

export default CommentContainer
