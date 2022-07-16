import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js'
import controller from './controller.mjs';

import View from './modules/View/index.mjs';
import RegisterProject from './modules/RegisterProject/index.mjs';
import Profile from './modules/Profile/index.mjs';

const view = new View();
const registerProject = new RegisterProject();
const profile = new Profile();

controller.initialize({
    view,
    registerProject,
    profile
});