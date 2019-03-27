import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../style/Login.css'


class SignupForm extends Component{
    state={
        email: '',
        password:'',
        first_name: '',
        last_name: '',
        user_name: '',
        confirm_password: ''
    }

    validateForm() {
        return (this.state.email.length > 0 && this.state.password.length > 0 
            && this.state.first_name.length > 0 && this.state.last_name.length > 0
            && this.state.user_name.length > 0 && this.state.confirm_password.length > 0);
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
            // <form className="signup-form" onSubmit={this.handleSubmit}>
            //     <h1>Sign Up: </h1>
            //     <p><input placeholder="First Name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} required/></p>
            //     <p><input placeholder="Last Name" type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} required/></p>
            //     <p><input placeholder="User Name" type="text" name="user_name" value={this.state.user_name} onChange={this.handleChange} required/></p>
            //     <p><input placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} required/></p>
            //     <p><input placeholder="Password" type ="password" name="password" value={this.state.password} onChange={this.handleChange} required/></p>
            //     <p><input placeholder="Confirm Password" type ="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange} required/></p>
            //     <button>Sign Up</button><br />
            //     <button onClick={this.handleClick}>Already Sign Up</button>
            // </form>



            <div className="Login">
            <form onSubmit={this.handleSubmit}>
                {/* <h1>Log In: </h1>
                {this.props.error ?
                <p>Wrong email or password</p>
            :
            null} */}
             <h1>Sign Up: </h1>
            <FormGroup controlId="first_name">
                <FormControl
                autoFocus
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                name="first_name"
                onChange={this.handleChange}
                
                />
            </FormGroup>
            <FormGroup controlId="last_name">
                <FormControl
                value={this.state.last_name}
                name="last_name"
                placeholder="Last Name"
                onChange={this.handleChange}
                type="text"
                />
            </FormGroup>
            <FormGroup controlId="user_name">
                <FormControl
                autoFocus
                type="text"
                placeholder="User Name"
                value={this.state.user_name}
                name="user_name"
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="email">
                <FormControl
                autoFocus
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="password">
                <FormControl
                autoFocus
                type="password"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="confirm_password">
                <FormControl
                autoFocus
                type="password"
                placeholder="Confirm Password Name"
                value={this.state.confirm_password}
                name="confirm_password"
                onChange={this.handleChange}
                />
            </FormGroup>
            <Button
                block
                disabled={!this.validateForm()}
                type="submit"
            >
                Sign Up
            </Button>
            <Button
                block
                
                onClick={this.handleClick}
            >
                Log In
            </Button>
            
            </form>
            </div>
        )

        
    }
}

export default withRouter(SignupForm);