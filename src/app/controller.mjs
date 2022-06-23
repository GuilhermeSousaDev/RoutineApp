export default class Controller {
    constructor({ view }) {
        this.view = view;
    }

    static initialize(dependencies) {
        const controller = new Controller(dependencies);

        return controller._init();
    }

    _init() {
        this.viewConfig();
    }

    viewConfig() {
        this.view.transformView();
        this.view.messagesSectionToggle();
        this.view.themeModeToggle();
        this.view.formatDateTime();
    }
}