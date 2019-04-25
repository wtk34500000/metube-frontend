import React from 'react'
import Comment from '../Components/Comment'
import InputComment from '../Components/InputComment'
import '../style/video.css'

class CommentContainer extends React.Component {
    state ={
        comments: [],
        video: ""
    }

    handleSubmit = (comment) => {
            fetch("http://localhost:4000/comments", {
                method: "POST",
                headers: {
                "content-type": "application/json",
                accepts: "application/json"
                },
                body: JSON.stringify({comment:{
                    "content": comment,
                    "history_id": this.props.histories.id,
                    "user_name": this.props.currentUser.user_name
                }})
            }).then(res => res.json()).then(comment => {
                console.log('return comment', comment);
                this.setState({ comments: [...this.state.comments, comment]
                })})
    }

    componentDidMount(){
      this.update()
    }
    update = () => {
      console.log("done")
      this.setState({comments: this.props.video.comments,
      video: this.props.video})

    }
    componentDidUpdate(){
      if(this.props.video !== this.state.video){
        this.update()}
    }
    render(){
        return (
            <div id='comment-container'>
                <div id="comment-header">Comments</div>
                <InputComment currentUser={this.props.currentUser} handleSubmit={this.handleSubmit}/>
                <Comment comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentContainer
