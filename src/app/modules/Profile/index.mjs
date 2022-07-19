import ProfileController from "./controllers/ProfileController.mjs";
import Render from "./methods/render.mjs";

export default class Profile {
    constructor() {
        const render = new Render();

        return new ProfileController({ render });
    }
}