import React from 'react'
import img from '../img/user.png'

class InputComment extends React.Component {
    state = {
        input: ''
    }

    handleChange=(e)=>{
      console.log(e.target.value)
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = () => {
      if(this.state.input.length > 0){
        this.props.handleSubmit(this.state.input)

        this.setState({
            input: ""
        })
      }
    }
    enterPressed = (event)=> {
    var code = event.keyCode || event.which;
    if(code === 13) {this.handleSubmit()}
}

    render(){
        return (
            <div id="input-comment">
            <img src={img} />
            <textarea name="message" rows="1" cols="30" onChange={this.handleChange} value={this.state.input} placeHolder={this.props.currentUser.user_name}></textarea>
            <button id={this.state.input.length > 0 ? "can-submit":"cannot-submit"} onClick={this.handleSubmit}>Submit</button>
            </div>
    )}
}

export default InputComment
