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
        }, () =>  console.log(this.props.history.id))
         
        // console.log(this)
            fetch("http://localhost:4000/comments", {
                method: "POST",
                headers: {
                "content-type": "application/json",
                accepts: "application/json"
                },
                body: JSON.stringify({comment:{
                    "content": comment,
                    "history_id": this.props.history.id
                }})
            }).then(res => res.json()).then(console.log)
    }

    // createComment=(comment)=>{
    //     const histy_id =this.props.history.id
    //     fetch("http://localhost:4000/comments",{
    //             method: "POST",
    //             headers: {
    //             " content-type": "application/json",
    //             accepts: "application/json"
    //             },
    //             body: JSON.stringify({comment:{
    //                 "content": comment,
    //                 "history_id": histy_id
    //             }})
    //         })
    // }

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