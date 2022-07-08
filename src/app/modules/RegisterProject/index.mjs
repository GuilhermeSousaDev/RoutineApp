import RegisterProjectController from "./controllers/RegisterProjectController.mjs";

import Effects from "./services/Effects/index.mjs";

export default class RegisterProject {
    constructor() {
        const effects = new Effects();

        return new RegisterProjectController({ 
            effects
        });
    }
}
