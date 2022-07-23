export default class Controller {
    constructor({ 
        view, 
        registerProject, 
        profile, 
        auth 
    }) {
        this.view = view;
        this.registerProject = registerProject;
        this.profile = profile;
        this.auth = auth;
    }

    static initialize(dependencies) {
        const controller = new Controller(dependencies);

        return controller._init();
    }

    _init() {
        this.viewConfig();
        this.registerProjectConfig();
        this.profileConfig();
        this.authConfig();
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

    profileConfig() {
        this.profile.loadProfile();
        this.profile.showLoginForm();
        this.profile.closeLoginArea();
    }

    authConfig() {
        this.auth.authenticate();
    }
}