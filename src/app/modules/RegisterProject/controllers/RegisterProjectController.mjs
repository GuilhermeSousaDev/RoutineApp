export default class RegisterProjectController {
    constructor({ effects, render, api }) {
        this.effects = effects;
        this.render = render;
        this.api = api;

        this.btnAdd = document.querySelector('.btn-add');
        this.btnNextStep = document.querySelector('.btn-shadow');
        this.registerProjectArea = document.querySelector('.register-project-area');

        this.registerNameInput = 
            document.querySelector('.register-project-container').children[1].children[0];
        this.registerDetailsInput = 
            document.querySelector('.register-project-container').children[2].children[0];
    }

    showRegisterProjectArea() {
        const registerProjectAreaStyle = this.registerProjectArea.style;

        this.btnAdd.addEventListener(
            'click', 
            () => this.effects.toggleShowRegisterProjectNameArea(registerProjectAreaStyle)
        );
    }

    registerProject() {
        this.btnNextStep.addEventListener('click', async () => {
            const name = this.registerNameInput.value;
            const details = this.registerDetailsInput.value;

            if (name.length && details.length) {
                const project = await this.api.createProject({ name, details });

                console.log(project);
            }
        });
    }
}