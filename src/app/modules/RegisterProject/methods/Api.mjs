import { apiConfig } from '../config/apiConfig.mjs';

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
        const project = await fetch(`${apiConfig.url}/projects`, {
            method: "POST",
            body: { name, details },
            headers: {
                Authorization: this.token,
            }
        });

        return project;
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