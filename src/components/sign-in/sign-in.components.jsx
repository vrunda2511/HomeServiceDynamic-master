import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.components';
import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            login: false,
            storage: null
        }
    }    

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState(
            {
            email: '',
            password:''
            
    })
    }
    handleChange= (event)=>{
        const {value, name} = event.target;

        this.setState({[name]:value})
    }
    login(){
        fetch('http://localhost:4000/api/Signin',{
            method:'POST',
            // contentType:'application/json',
            body:JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((result)=>{
                console.log('result',result);
                localStorage.setItem('login',JSON.stringify({
                    login:true,
                    token:result.token
                }))
            })
        })
    }


    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I Already Have an Account</h2>
                <span>Sign In With Your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange}  required />
                    {/* <label>Email</label> */}
                    <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} required />
                    {/* <label>Password</label> */}

                    <CustomButton type="submit" onClick={()=>{this.login()}} >Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;