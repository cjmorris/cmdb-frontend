import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../components/UserPool";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

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
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )   
}

export default Login