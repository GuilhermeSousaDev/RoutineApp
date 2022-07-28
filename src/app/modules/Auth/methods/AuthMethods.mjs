import { apiConfig } from '../../../config/apiConfig.mjs';

export default class AuthMethods {
    async handleAuthenticate({ email, password }) {
        if (email.length && password.length) {
            const form = new FormData();

            form.append('email', email);
            form.append('password', password);

            const request = await fetch(`${apiConfig.url}/session`, {
                method: "POST",
                body: form,
            });

            const response = await request.json();

            console.log(response);
        }
    }
}