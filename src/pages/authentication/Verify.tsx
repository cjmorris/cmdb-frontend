import '../../styles/authentication.css'

import { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../../components/UserPool";
import { Link } from 'react-router-dom';

interface VerifyProps {
    email: string,
}

function Verify(props: VerifyProps) {
    const [confirmationCode, setConfirmationCode] = useState("")
    const [successfullyVerified, setSuccessfullyVerified] = useState(false)

    function submitConfirmationCode(){
        let userData = {
            Username : props.email,
            Pool : UserPool
        };
     
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration(confirmationCode, true, function(err, result) {
            if (err) {
                alert(err);
                return;
            }
            if(result === 'SUCCESS'){
                setSuccessfullyVerified(true)
            }
        });
    }

    return (
        <div className='content'>
            {successfullyVerified 
            ?
                <>
                    <div className='center-content'>
                        <h2>Verified!</h2>
                    </div>
                    <div className='center-content'>
                        <p className='description'>You have successfully verified your account.</p>
                    </div>
                    <div className='center-content'>
                        <Link to={'/login'}>
                            <button className='button'>Back to login</button>
                        </Link>
                    </div>
                </>
            :
                <>
                    <div className='center-content'>
                        <h2>Verify your email</h2>
                    </div>
                    <p className='description'>Please enter the confirmation code sent to {props.email}</p>
                    <div className='grid auth-grid'>
                        <div className='grid-item auth-grid-item'>
                            <input 
                                className='input'
                                value={confirmationCode}
                                onChange={(event) => setConfirmationCode(event.target.value)}
                                type='text' 
                                placeholder='Confirmation Code'
                            ></input>
                        </div>
                    </div>
                    <div className='center-content'>
                        <button className='button' type="submit" onClick={submitConfirmationCode}>Confirm</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Verify