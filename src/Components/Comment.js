import React from 'react'
import '../style/video.css'

const Comment = (props) => {
    const arrOfComment = props.comments.map((comment, idx) => <div className="comment" key={idx}><h3>*username*</h3>

    <p>{comment}</p></div>);

    return (
        <div id="comments">
            {arrOfComment}
        </div>
    )
}

export default Comment
