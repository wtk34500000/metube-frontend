import React from 'react'
import '../style/video.css'

const Comment = (props) => {

    const arrOfComment =props.comments.map((comment, idx) => <div className="comment" key={idx}><h3>{}</h3>
    <p>{comment.content}</p></div>);


    return (
        <div id="comments">
            {arrOfComment}
        </div>
    )
}

export default Comment
