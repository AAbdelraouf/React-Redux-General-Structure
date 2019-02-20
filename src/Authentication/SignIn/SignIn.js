import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignUpComponent: false
        };
    }
     
    onClickShowSignUp = () => {
        this.setState({ showSignUpComponent:true })
    }

    signUserIn = e => e.preventDefault();

    render() { 
        return (
            <div>

            <form>
            <p>Log in</p>
            <input type="text" placeholder="Email"/>
            <input type="Password" placeholder = "Password"/>
            <button onClick = { this.signUserIn } >Sign in</button>
            <p onClick = { this.onClickShowSignUp } >Sign up</p>
            { this.state.showSignUpComponent ? <SignUp /> : null}
            </form>

            </div>
        );
    }
}
export default SignIn;