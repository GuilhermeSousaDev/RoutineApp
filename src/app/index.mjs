import controller from './controller.mjs';

import View from './view.mjs';
import RegisterProject from './modules/RegisterProject/index.mjs';

const view = new View();
const registerProject = new RegisterProject();

controller.initialize({
    view,
    registerProject,
});