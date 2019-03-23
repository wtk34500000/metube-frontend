import React, { Component } from 'react'
import { withRouter } from "react-router-dom";


class SignupForm extends Component{
    state={
        email: '',
        password:'',
        first_name: '',
        last_name: '',
        user_name: '',
        confirm_password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state)
        this.setState({
            email: '',
            password:'',
            first_name: '',
            last_name: '',
            user_name: '',
            confirm_password: ''
        })
    }

    handleClick = () => {
        this.props.history.push('/login')
    }

    render(){
        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <h1>Sign Up: </h1>
                <p><input placeholder="First Name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/> </p>
                <p><input placeholder="Last Name" type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/></p>
                <p><input placeholder="User Name" type="text" name="user_name" value={this.state.user_name} onChange={this.handleChange}/></p>
                <p><input placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange}/></p>
                <p><input placeholder="Password" type ="password" name="password" value={this.state.password} onChange={this.handleChange}/></p>
                <p><input placeholder="Confirm Password" type ="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange}/></p>
                <button>Sign Up</button><br />
                <button onClick={this.handleClick}>Already Registed</button>
            </form>
        )

        
    }
}

export default withRouter(SignupForm);