import React from 'react'

class InputComment extends React.Component {
    state = {
        input: ''
    }

    // componentDidMount(){
    //     const token = localStorage.token

    
    //     fetch("http://localhost:4000/comments",{
    //             method: "POST",
    //             headers: {
    //             " content-type": "application/json",
    //             accepts: "application/json"
    //             // Authorization: `${token}`
    //             },
    //             body: JSON.stringify({
    //                 comment: {
    //                 "content": this.state.input,
    //                 "history_id": this.props.history.id
    //                 }
    //             })
    //         }).then(res => res.json()).then(console.log)
        
    // }

    handleChange=(e)=>{
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.input)
        
        this.setState({
            input: ""
        })
    }

    render(){
        return (
            <div className="InputComment">
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.handleSubmit} >Submit</button>
            </div>
    )}
}

export default InputComment