import RegisterProjectController from "./controllers/RegisterProjectController.mjs";

import Effects from "./methods/Effects.mjs";
import Render from "./methods/Render.mjs";
import Api from "./methods/Api.mjs";

export default class RegisterProject {
    constructor() {
        const effects = new Effects();
        const render = new Render();
        const api = new Api();

        return new RegisterProjectController({ 
            effects,
            render,
            api
        });
    }
}
