export default class ViewController {
    #messagesSection;

    constructor() {
        this.listView = document.querySelector('.list-view');
        this.gridView = document.querySelector('.grid-view');
        this.projectsList = document.querySelector('.project-boxes');
        this.modeSwitch = document.querySelector('.mode-switch');
        this.messagesBtn = document.querySelector('.messages-btn');
        this.messagesBtnClose = document.querySelector('.messages-close');
        this.time = document.querySelector('.time');

        this.#messagesSection = document.querySelector('.messages-section');
    }

    #onTransformListView() {
        this.gridView.classList.remove('active');
        this.listView.classList.add('active');
        this.projectsList.classList.remove('jsGridView');
        this.projectsList.classList.add('jsListView');
    }

    #onTransformGridView() {
        this.gridView.classList.add('active');
        this.listView.classList.remove('active');
        this.projectsList.classList.remove('jsListView');
        this.projectsList.classList.add('jsGridView');
    }

    #onToggleThemeMode() {
        document.documentElement.classList.toggle('dark');
        this.modeSwitch.classList.toggle('active');
    }

    #onMessagesSectionShow() {
        this.#messagesSection.classList.add('show');
    }

    #onCloseMessagesSection() {
        this.#messagesSection.classList.remove('show');
    }

    transformView() {
        this.gridView.addEventListener('click', () => this.#onTransformGridView());
        this.listView.addEventListener('click', () => this.#onTransformListView());
    }

    messagesSectionToggle() {
        this.messagesBtn.addEventListener('click', () => this.#onMessagesSectionShow());
        this.messagesBtnClose.addEventListener('click', () => this.#onCloseMessagesSection());
    }

    themeModeToggle() {
        this.modeSwitch.addEventListener('click', () => this.#onToggleThemeMode());
    }

    formatDateTime() {
        const date = new Date();
        const month = date.toLocaleDateString('default', { month: 'long' });
        const day = date.toLocaleDateString('default', { day: '2-digit' });
        const formatedMonth = month.split('')[0].toUpperCase() + month.slice(1);

        this.time.innerHTML = `${formatedMonth}, ${day}`;
    }
}