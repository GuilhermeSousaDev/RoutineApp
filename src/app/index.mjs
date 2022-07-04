import controller from './controller.mjs';

import View from './view.mjs';
import Api from './Api/Api.mjs';

const view = new View();
const api = new Api();

controller.initialize({
    view,
    api
});