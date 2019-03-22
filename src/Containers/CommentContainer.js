import React from 'react'
import Comment from '../Components/Comment'

class CommentContainer extends React.Component {
    render(){
        return (
            <div className='comment-container'>
                <h1>comment area</h1>
                <Comment />
            </div>
        )
    }
}

export default CommentContainer