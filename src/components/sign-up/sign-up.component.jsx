import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';


import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };
    }
    HandleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){

            alert("password don't macth");

            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
                );
            await createUserProfileDocument( user, {displayName} );
            
            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            });
        }
        catch(error) {
            console.error(error);
        }
    };
    HandleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name] : value });
    };


    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h1 className='title'>I do not have a account</h1>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.HandleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.HandleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.HandleChange}
                    label='Email'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.HandleChange}
                    label='Password'
                    required
                    />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.HandleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;