import '../../styles/authentication.css'

import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../../components/UserPool";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function authenticate(){
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        })

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("OnSuccess ", data)
            },
            onFailure: (err) => {
                console.error("OnFailure :", err)
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data)
            }
        })
    }

    return (
        <div className='auth-page'>
            <div className='auth-widget'>
                <div className='content'>
                    <div className='center-content'>
                        <h2>Login</h2>
                    </div>
                    <div className='grid auth-grid'>
                        <div className='grid-item auth-grid-item'>
                            <input 
                                className='input'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                type='text'
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
                    </div>
                    <div className='center-content'>
                        <button className='button' type="submit" onClick={authenticate}>Login</button>
                    </div>
                </div>  
            </div>
        </div>
    )   
}

export default Login