export default class RegisterProjectController {
    constructor({ effects, render }) {
        this.effects = effects;
        this.render = render;

        this.btnAdd = document.querySelector('.btn-add');
        this.btnNextStep = document.querySelector('.btn-shadow');
        this.registerProjectArea = document.querySelector('.register-project-area');
        this.registerNameInput = document.querySelector('.register-name-input');
    }

    showRegisterProjectArea() {
        const registerProjectAreaStyle = this.registerProjectArea.style;

        this.btnAdd.addEventListener(
            'click', 
            () => this.effects.toggleShowRegisterProjectNameArea(registerProjectAreaStyle)
        );
    }

    registerProject() {
        this.btnNextStep.addEventListener('click', () => {
            console.log('create');
        });
    }
}