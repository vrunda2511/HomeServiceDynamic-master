import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.components'
import './sign-up.styles.scss'

class SignUp extends Component {
    constructor(){
    super();

    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
}

    handleSubmit = event =>{
        event.preventDefault();

        // const { firstName, lastName, email, password, confirmPassword } = this.state

        // if(password!==confirmPassword){
        //     alert("Hey, It's not Matching");
        //     return;
        // }
        try{
            this.state({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }catch(error){
            console.log(error)
        }
    }
 
    handleChange= (event)=>{
        const {value, name} = event.target;

        this.setState({[name]:value})
    }

    render() {
        const { firstName, lastName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
            <h2 className='title'>I do not have Account</h2>
                <span>Sign Up with Your Email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                    label='First Name'
                />
                <FormInput
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={this.handleChange}
                    label='Last Name'
                />    
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                />
                </form>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </div>
        );
    }
}

export default SignUp;