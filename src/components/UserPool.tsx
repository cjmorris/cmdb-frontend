import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-southeast-2_BGUzwAY84",
    ClientId: "2nq58ijungbuk8lcvdjv6ahmfo"
}

export default new CognitoUserPool(poolData)