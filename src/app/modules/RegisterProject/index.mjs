import RegisterProjectController from "./controllers/RegisterProjectController.mjs";

import Effects from "./methods/Effects.mjs";
import Render from "./methods/Render.mjs";

export default class RegisterProject {
    constructor() {
        const effects = new Effects();
        const render = new Render();

        return new RegisterProjectController({ 
            effects,
            render
        });
    }
}
