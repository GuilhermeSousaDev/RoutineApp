import controller from './controller.mjs';
import View from './view.mjs';

const view = new View();

controller.initialize({
    view
});