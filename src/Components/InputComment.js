import React from 'react'

class InputComment extends React.Component {
    state = {
        input: ''
    }

    handleChange=(e)=>{
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = () => {
        console.log( this.props)
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