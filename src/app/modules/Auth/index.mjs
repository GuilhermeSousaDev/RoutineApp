import AuthController from "./controllers/AuthController.mjs";
import AuthMethods from "./methods/AuthMethods.mjs";

export default class Auth {
    constructor() {
        const authMethods = new AuthMethods();

        return new AuthController({ authMethods });
    }
}