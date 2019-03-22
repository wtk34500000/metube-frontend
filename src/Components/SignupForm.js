import React, { Component } from 'react'


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

    render(){
        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <p>First Name: <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/> </p>
                <p>Last Name: <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/></p>
                <p>User Name: <input type="text" name="user_name" value={this.state.user_name} onChange={this.handleChange}/></p>
                <p>Email: <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/></p>
                <p>Password: <input type ="password" name="password" value={this.state.password} onChange={this.handleChange}/></p>
                <p>Confirm Password: <input type ="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange}/></p>
                <button>LOG IN</button>
            </form>
        )

        
    }
}

export default SignupForm;