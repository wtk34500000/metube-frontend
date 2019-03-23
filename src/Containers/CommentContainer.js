import React from 'react'
import Comment from '../Components/Comment'
import InputComment from '../Components/InputComment'

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
            <div className='comment-container'>
                <h1>comment area</h1>
                <Comment comments={this.state.comments}/>
                <InputComment handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default CommentContainer