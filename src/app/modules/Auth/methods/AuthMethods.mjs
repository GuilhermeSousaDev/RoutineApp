import { apiConfig } from '../../../config/apiConfig.mjs';

export default class AuthMethods {
    async handleAuthenticate({ email, password }) {
        if (email.length && password.length) {
            const form = {
                email: email,
                password: password
            }

            const request = await fetch(`${apiConfig.url}/session`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
            });

            const response = await request.json();

            localStorage.setItem('token', response.token);
            location.reload();
        }
    }
}