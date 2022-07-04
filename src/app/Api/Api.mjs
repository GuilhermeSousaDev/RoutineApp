export default class Api {
    constructor() {
        this.btnIcon = document.querySelector('.btn-icon');
        this.registerProjectArea = document.querySelector('.register-project-area');
    }

    #toggleShowRegisterProjectArea() {
        let area = this.registerProjectArea.style;

        area.display = area.display === 'none'? 
        area.display = 'block' : area.display = 'none';
    }

    showRegisterProjectArea() {
        this.btnIcon.addEventListener('click', () => this.#toggleShowRegisterProjectArea());
    }
}