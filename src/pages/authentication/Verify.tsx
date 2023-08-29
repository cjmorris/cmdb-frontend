import '../../styles/authentication.css'

import { useState } from "react";

interface VerifyProps {
    email: string,
}

function Verify(props: VerifyProps) {
    const [confirmationCode, setConfirmationCode] = useState("")

    function submitConfirmationCode(){
        console.log('submitting...')
    }

    return (
        <div className='content'>
            <div className='center-content'>
                <h2>Verify your email</h2>
            </div>
            <p className='description'>Please enter the confirmation code sent to {props.email}</p>
            <input 
                className='input'
                value={confirmationCode}
                onChange={(event) => setConfirmationCode(event.target.value)}
                type='text' 
                placeholder='Confirmation Code'
            ></input>
            <div className='center-content'>
                <button className='button' type="submit" onClick={submitConfirmationCode}>Confirm</button>
            </div>
        </div>
    )
}

export default Verify