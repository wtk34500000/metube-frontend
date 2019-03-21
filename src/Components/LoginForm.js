import React, { Component } from 'react'


class LoginForm extends Component{
    state={
        email: '',
        password:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = () => {
        this.props.handleSubmit(this.state)
        this.setState({
            email: '',
            password:''
        })
    }

    render(){
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type ="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button>LOG IN</button>
            </form>
        )

        
    }
}

export default LoginForm;