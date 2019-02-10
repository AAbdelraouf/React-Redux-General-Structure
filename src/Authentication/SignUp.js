import React, {Component} from 'react';
import Firebase from '../Firebase/Firebase'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { email:'', password:'', repeatedPassword:'' };

        this.saveEmailInState            = this.saveEmailInState.bind(this);
        this.savePasswordInState         = this.savePasswordInState.bind(this);
        this.saveRepeatedPasswordInState = this.saveRepeatedPasswordInState.bind(this);
    }
     
    signup = (email, pass) => {
        const emailFromState = this.state.email
        const passwordFromState =  this.state.password
        const repeatedPasswordFromState =  this.state.repeatedPassword
        if(passwordFromState !== repeatedPasswordFromState){ 
            alert('Password mismatch!');
            // this.setState({ email:'', password:'', repeatedPassword:'' });
    }
        else{
            Firebase.auth().createUserWithEmailAndPassword(email, pass).then((user) =>{
                this.setState({ email:'', password:'', repeatedPassword:'' });
                alert('Thank you ' + email +  ' for joining');
                Firebase.auth().currentUser.sendEmailVerification().then(()=> {
                    alert('email sent, please follow link in email to verify')
                    }).catch((error)=> {
                        alert(error.code)
                    })
                    }).catch(function(error){    
                alert(error.code)
            })
        }
    
}

saveEmailInState            = (val) => { this.setState({ email: val.target.value })}
savePasswordInState         = (val) => { this.setState({ password: val.target.value }) };
saveRepeatedPasswordInState = (val) => { this.setState({ repeatedPassword : val.target.value }) };

    render() {
        return (
                <div>
                <h1>Sign up to use the site</h1>
                    <input type="text" placeholder = "Enter your email" 
                    value = {this.state.email}
                    onChange = {(val) => { this.saveEmailInState(val)}  } />

                    <input type="text" placeholder = "Enter your password" 
                    value = {this.state.password}
                        onChange = {(val) => {this.savePasswordInState(val) }}
                    />

                    <input type="text" placeholder = "Repeat your password"
                    value = {this.state.repeatedPassword}
                        onChange = {(val) => {this.saveRepeatedPasswordInState(val)}}
                    />

                    <button onClick = {(email, password) => 
                    this.signup(this.state.email, this.state.password)}>

                    Sign up now!</button>
                    <p>{this.state.email}</p>
                    <p>{this.state.password}</p>
                    <p>{this.state.repeatedPassword}</p>
                </div>
            
        );
    }
}

export default SignUp;