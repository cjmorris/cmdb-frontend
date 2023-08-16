import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-southeast-2_MzfU95UX9",
    ClientId: "6mu97sv48renrkikt44fbhgij8"
}

export default new CognitoUserPool(poolData)