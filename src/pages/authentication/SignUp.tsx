import '../../styles/authentication.css'

import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import * as FaIcons from 'react-icons/fa6'
import UserPool from "../../components/UserPool";


function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function containsLowercaseCharacter(str: string){
        for(let i = 0;i<str.length;i++){
            //Check if ASCII character is in the lowercase character range
            if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
                return true;
            }
        }
        return false;
    }

    function containsUppercaseCharacter(str: string){
        for(let i = 0;i<str.length;i++){
            //Check if ASCII character is in the uppercase character range
            if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
                return true;
            }
        }
        return false;
    }

    function containsNumber(str: string){
        for(let i = 0;i<str.length;i++){
            //Check if ASCII character is in the 0 - 9 number range
            if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
                return true;
            }
        }
        return false;
    }

    function containsSpecialCharacter(str: string) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
      }

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
                            <ul className='password-criteria'>
                                {password.length >= 8 
                                    ? <li className='password-criteria-item completed'><FaIcons.FaCheck/><span>8 characters minimum</span></li>
                                    : <li className='password-criteria-item not-completed'><FaIcons.FaXmark/><span>8 characters minimum</span></li>
                                }
                                {containsUppercaseCharacter(password) 
                                    ? <li className='password-criteria-item completed'><FaIcons.FaCheck/><span>One uppercase character</span></li>
                                    : <li className='password-criteria-item not-completed'><FaIcons.FaXmark/><span>One uppercase character</span></li>
                                }
                                {containsLowercaseCharacter(password) 
                                    ? <li className='password-criteria-item completed'><FaIcons.FaCheck/><span>One lowercase character</span></li>
                                    : <li className='password-criteria-item not-completed'><FaIcons.FaXmark/><span>One lowercase character</span></li>
                                }
                                {containsNumber(password) 
                                    ? <li className='password-criteria-item completed'><FaIcons.FaCheck/><span>One number</span></li>
                                    : <li className='password-criteria-item not-completed'><FaIcons.FaXmark/><span>One number</span></li>
                                }
                                {containsSpecialCharacter(password) 
                                    ? <li className='password-criteria-item completed'><FaIcons.FaCheck/><span>One special character</span></li>
                                    : <li className='password-criteria-item not-completed'><FaIcons.FaXmark/><span>One special character</span></li>
                                }
                            </ul>
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