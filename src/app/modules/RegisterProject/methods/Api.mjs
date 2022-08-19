import { apiConfig } from '../../../config/apiConfig.mjs';

export default class Api {
    constructor() {
        this.token = localStorage.getItem('token');
    }

    async listProjects() {
        const projects = await fetch(apiConfig.url);

        return projects;
    }

    async showProject(id) {
        const project = await fetch(`${apiConfig.url}/${id}`);

        return project;
    }

    async createProject({ name, details }) {
        if (this.token) {
            const { id: userId } = await (await fetch(`${apiConfig.url}/session/${this.token}`)).json();

            const data = { name, details, creator_user: userId, participating_users: null };

            const req = await fetch(`${apiConfig.url}/project`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            return req.json();
        }
    }

    async deleteProject(id) {
        await fetch(`${apiConfig.url}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: this.token,
            }
        });
    }
}