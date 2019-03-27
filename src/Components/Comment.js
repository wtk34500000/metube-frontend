import React from 'react'
import '../style/video.css'

const Comment = (props) => {
    const arrOfComment =props.comments.map((comment, idx) => <div className="comment" key={idx}><h3>{comment.user_name}</h3><p>{comment.content}</p></div>);
    console.log("comments boy::: ", props)

    return (
        <div id="comments">
         {arrOfComment}
        </div>
    )
}

export default Comment
