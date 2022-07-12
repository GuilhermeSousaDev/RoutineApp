export default class ProfileController {
    token;
    
    constructor() {
        this.token = localStorage.getItem('token');
        this.profileBtn = document.querySelector('.profile-btn');
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
}