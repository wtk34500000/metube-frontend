import React from 'react'

const Comment = (props) => {
    const arrOfComment = props.comments.map((comment, idx) => <li key={idx} style={{border: "1px solid black"}}>{comment}</li>);

    return (
        <div className="comment">
            {arrOfComment}
        </div>
    )
}

export default Comment