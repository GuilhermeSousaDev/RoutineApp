export default class Render {
    renderOldStepRegisterProject(area, oldHtml) {
        area.innerHTML = oldHtml;
    }

    renderNextStepRegisterProject(area, projectName) {
        if (projectName) {
            const oldRegisterProjectAreaHtml = area.innerHTML;

            area.innerHTML = `
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
                () => this.renderOldStepRegisterProject(area, oldRegisterProjectAreaHtml)
            );
        }
    }
}