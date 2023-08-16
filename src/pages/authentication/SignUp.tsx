import '../../styles/authentication.css'

import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../../components/UserPool";

function SignUp() {

    return (
        <div className='login-page'>
            <div className='login-widget'>
                <div className='content'>
                    <h2>Sign Up</h2>
                </div>  
            </div>
        </div>
    )   
}

export default SignUp