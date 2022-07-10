export default class Controller {
    constructor({ view, registerProject }) {
        this.view = view;
        this.registerProject = registerProject;
    }

    static initialize(dependencies) {
        const controller = new Controller(dependencies);

        return controller._init();
    }

    _init() {
        this.viewConfig();
        this.registerProjectConfig();
    }

    viewConfig() {
        this.view.transformView();
        this.view.messagesSectionToggle();
        this.view.themeModeToggle();
        this.view.formatDateTime();
    }

    registerProjectConfig() {
        this.registerProject.showRegisterProjectArea();
        this.registerProject.registerProject();
    }
}