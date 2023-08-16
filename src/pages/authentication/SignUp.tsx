import '../../styles/authentication.css'

import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../../components/UserPool";

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmed, setpasswordConfirmed] = useState("")

    function requestSignUp(){
        // UserPool.signUp(email, password, [], [], function(err, result){
        //     if (err) {
        //         alert(err);
        //         return;
        //     }
        //     let cognitoUser = result?.user;
        //     console.log('user name is ' + cognitoUser?.getUsername());
        // });
    }

    return (
        <div className='auth-page'>
            <div className='auth-widget'>
                <div className='content'>
                    <div className='center-content'>
                        <h2>Create a new account</h2>
                    </div>
                    <div className='grid auth-grid'>
                        <div className='grid-item auth-grid-item'>
                            <input 
                                className='input'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                type='email'
                                placeholder='Email Address'
                            ></input>
                        </div>
                        <div className='grid-item auth-grid-item'>
                            <input 
                                className='input'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                type='password' 
                                placeholder='Password'
                            ></input>
                        </div>
                        <div className='grid-item auth-grid-item'>
                            <input 
                                className='input'
                                value={passwordConfirmed}
                                onChange={(event) => setpasswordConfirmed(event.target.value)}
                                type='password' 
                                placeholder='Confirm Password'
                            ></input>
                        </div>
                        <div className='center-content'>
                            <button className='button' type="submit" onClick={requestSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )   
}

export default SignUp