export default class RegisterProjectController {
    constructor({ effects }) {
        this.effects = effects;

        this.addBtn = document.querySelector('.btn-add');
        this.btnNextStep = document.querySelector('.btn-shadow');
        this.registerProjectArea = document.querySelector('.register-project-area');
        this.registerNameInput = document.querySelector('.register-name-input');
    }

    #toggleShowRegisterProjectNameArea() {
        let areaStyle = this.registerProjectArea.style;
        areaStyle.display === 'block'? 
            this.effects.removeAreaEffect(areaStyle) : this.effects.showAreaEffect(areaStyle);
    }

    #renderOldStepRegisterProject(oldRegisterProjectAreaHtml) {
        this.registerProjectArea.innerHTML = oldRegisterProjectAreaHtml;
    }

    #renderNextStepRegisterProject() {
        if (this.registerNameInput.value) {
            const projectName = this.registerNameInput.value;
            const oldRegisterProjectAreaHtml = this.registerProjectArea.innerHTML;

            this.registerProjectArea.innerHTML = `
                <div class="register-project-container">
                    <p class="register-app-name">Routine - Project Create</p>
                    <p class="register-app-name">${projectName}</p>
                    <div class="register-wrapper">
                        <input 
                        class="register-name-input" 
                        type="text" 
                        placeholder="Tell about this project routine"
                        >
                    </div>
                    <button class="btn-add btn-shadow add-btn">&#129044;</button>
                </div>
            `;

            document.querySelector('.btn-add')
                .addEventListener(
                    'click', 
                    () => this.#renderOldStepRegisterProject(oldRegisterProjectAreaHtml)
                );
        }
    }

    showRegisterProjectNameArea() {
        this.addBtn.addEventListener(
            'click', 
            () => this.#toggleShowRegisterProjectNameArea()
        );
    }

    showNextStepRegisterProject() {
        this.btnNextStep.addEventListener('click', () => this.#renderNextStepRegisterProject());
    }
}