import React from 'react'
import Comment from '../Components/Comment'
import InputComment from '../Components/InputComment'
import '../style/video.css'

class CommentContainer extends React.Component {
    state ={
        comments: []
    }

    handleSubmit = (comment) => {

        this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    render(){
        return (
            <div id='comment-container'>
                <div id="comment-header">comment area</div>
                <Comment comments={this.state.comments}/>
                <InputComment handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default CommentContainer
