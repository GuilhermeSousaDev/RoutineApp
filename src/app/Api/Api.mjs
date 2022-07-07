export default class Api {
    #projectName;
    #oldRegisterProjectAreaHtml;

    constructor() {
        this.addBtn = document.querySelector('.btn-add');
        this.btnNextStep = document.querySelector('.btn-shadow');

        this.registerProjectArea = document.querySelector('.register-project-area');
        this.registerNameInput = document.querySelector('.register-name-input');
    }

    #removeAreaEffect(areaStyle) {
        areaStyle.top = '800px';
        setTimeout(() => areaStyle.display = 'none', 1000);
    }

    #showAreaEffect(areaStyle) {
        areaStyle.display = 'block';
        setTimeout(() => areaStyle.top = '180px', 100);
    }

    #toggleShowRegisterProjectNameArea() {
        let areaStyle = this.registerProjectArea.style;
        areaStyle.display === 'block'? 
            this.#removeAreaEffect(areaStyle) : this.#showAreaEffect(areaStyle);
    }

    #renderOldStepRegisterProject(oldRegisterProjectAreaHtml) {
        this.registerProjectArea.innerHTML = oldRegisterProjectAreaHtml;
    }

    #renderNextStepRegisterProject() {
        if (this.registerNameInput.value) {
            this.#projectName = this.registerNameInput.value;

            this.#oldRegisterProjectAreaHtml = this.registerProjectArea.innerHTML;

            console.log(this.#oldRegisterProjectAreaHtml);

            this.registerProjectArea.innerHTML = `
                <div class="register-project-container">
                    <p class="register-app-name">Routine - Project Create</p>
                    <p class="register-app-name">${this.#projectName}</p>
                    <div class="register-wrapper">
                        <input 
                        class="register-name-input" 
                        type="text" 
                        placeholder="Tell about this project routine"
                        >
                    </div>
                    <button 
                        onclick='${console.log('teste')}' 
                        class="add-btn btn-shadow">&#129044;
                    </button>
                </div>
            `;
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