import React, { Component } from 'react'


class SignupForm extends Component{
    state={
        email: '',
        password:'',
        first_name: '',
        last_name: '',
        user_name: ''
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
            password:'',
            first_name: '',
            last_name: '',
            user_name: ''
        })
    }

    render(){
        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
                <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
                <input type="text" name="user_name" value={this.state.user_name} onChange={this.handleChange}/>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type ="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button>LOG IN</button>
            </form>
        )

        
    }
}

export default SignupForm;