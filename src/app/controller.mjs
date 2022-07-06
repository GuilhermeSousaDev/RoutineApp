export default class Controller {
    constructor({ view, api }) {
        this.view = view;
        this.api = api;
    }

    static initialize(dependencies) {
        const controller = new Controller(dependencies);

        return controller._init();
    }

    _init() {
        this.viewConfig();
        this.apiConfig();
    }

    viewConfig() {
        this.view.transformView();
        this.view.messagesSectionToggle();
        this.view.themeModeToggle();
        this.view.formatDateTime();
    }

    apiConfig() {
        this.api.showRegisterProjectNameArea();
        this.api.showRegisterUsersAndProgressArea();
    }
}