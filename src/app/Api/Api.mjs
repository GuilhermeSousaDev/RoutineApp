export default class Api {
    constructor() {
        this.btnIcon = document.querySelector('.btn-icon');
        this.btnNextStep = document.querySelector('.btn-shadow');

        this.registerProjectArea = document.querySelector('.register-project-area');
    }

    #removeAreaEffect(areaStyle) {
        areaStyle.top = '800px';
        setTimeout(() => areaStyle.display = 'none', 1000);
    }

    #showAreaEffect(areaStyle) {
        setTimeout(() => areaStyle.top = '180px', 300);
        areaStyle.display = 'block';
    }

    #toggleShowRegisterProjectNameArea() {
        let areaStyle = this.registerProjectArea.style;
        areaStyle.display === 'block'? 
            this.#removeAreaEffect(areaStyle) : this.#showAreaEffect(areaStyle);
    }

    showRegisterProjectNameArea() {
        this.btnIcon.addEventListener(
            'click', 
            () => this.#toggleShowRegisterProjectNameArea()
        );
    }

    showRegisterUsersAndProgressArea() {
        this.btnNextStep.addEventListener('click', () => console.log('click'))
    }
}