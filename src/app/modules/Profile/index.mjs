import ProfileController from "./controllers/ProfileController.mjs";

export default class Profile {
    constructor() {
        return new ProfileController();
    }
}