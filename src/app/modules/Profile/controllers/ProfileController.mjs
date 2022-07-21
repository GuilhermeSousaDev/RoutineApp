export default class ProfileController {
    token;
    
    constructor({ render }) {
        this.render = render;

        this.token = localStorage.getItem('token');
        this.profileBtn = document.querySelector('.profile-btn');
        this.loginContainer = document.querySelector('.login-container');
        this.closeLoginAreaBtn = document.querySelector('.close-button');
    }

    loadProfile() {
        const isAuth = this.token === null;

        if (!isAuth) {
            //search profile in api and render your user info
            this.profileBtn.innerHTML = `
                <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
                <span>Aybüke C.</span>
            `;
        } else {
            this.profileBtn.innerHTML = `
                <img src="https://cdn-icons-png.flaticon.com/512/18/18601.png" />
                <span>Login</span>
            `;
        }
    }

    showLoginForm() {
        this.profileBtn.addEventListener(
            'click', 
            () => this.render.toggleShowLoginContainer(this.loginContainer.style)
        );
    }

    closeLoginArea() {
        this.closeLoginAreaBtn.addEventListener(
            'click', 
            () => this.render.removeAreaEffect(this.loginContainer.style)
        );
    }
}