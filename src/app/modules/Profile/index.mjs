import Render from "../RegisterProject/methods/Render.mjs";
import ProfileController from "./controllers/ProfileController.mjs";

export default class Profile {
    constructor() {
        const render = new Render();

        return new ProfileController({ render });
    }
}