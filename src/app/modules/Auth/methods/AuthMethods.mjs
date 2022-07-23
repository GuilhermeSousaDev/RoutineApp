import { apiConfig } from '../../../config/apiConfig.mjs';

export default class AuthMethods {
    handleAuthenticate({ email, password }) {
        if (email.length && password.length) {
            const req = await fetch(`${apiConfig.url}/session`, { 
                method: "POST",
                body: { email, password }
            });
            const res = await req.json();

            console.log(res);
        }
    }
}