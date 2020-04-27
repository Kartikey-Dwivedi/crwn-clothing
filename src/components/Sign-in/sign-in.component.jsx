import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            Email:'',
            Password:''
        }
    }
    HandleSubmit = event => {
        event.preventDefault();

        const {email,Password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,Password);
            this.setState({Email:'', Password:''});
        }
        catch(error){
            console.log(error);
        }


     };

    HandleChange = event => {
        const {name,value} = event.target;

        this.setState({[name]:value});
    };
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign In with your Email And Password</span>
            <form onSubmit={this.HandleSubmit}>
                 <FormInput 
                 name='Email' 
                 type='Email'
                 HandleChange={this.HandleChange} 
                 value={this.state.Email}
                 label='Email'
                 required 
                 />
                 <FormInput 
                 name='Password' 
                 type='Password' 
                 HandleChange={this.HandleChange}
                 value={this.state.Password} 
                 label='Password' 
                 required 
                 />
                 <div className='button'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
        {' '} 
        Sign In With Google
        {' '}
        
        </CustomButton>
        </div>
            </form>
            </div>
        );
    }
}
export default SignIn;