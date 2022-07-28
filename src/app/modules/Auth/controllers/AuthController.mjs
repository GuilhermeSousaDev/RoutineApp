export default class AuthController {
    constructor({ authMethods }) {
        this.authMethods = authMethods;
        
        this.loginContainer = document.querySelector('.login-container');
        this.inputs = document.querySelectorAll('.login-form input');
        this.loginButton = document.querySelector('.login-button');
    }

    authenticate() {
        this.loginButton.addEventListener('click', async () => {
            const email = this.inputs[0].value;
            const password = this.inputs[1].value;

            this.authMethods.handleAuthenticate({ email, password });
        });
    }
}