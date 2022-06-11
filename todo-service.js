import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:4000/api/v1/todos",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    async getTodos() {
        return apiClient
            .get("/")
            .then((res) => res.data)
            .catch(() => {
                throw new Error("Cannot get todos");
            });
    },
    async getTodo(id) {
        return apiClient
            .get(`/${id}`)
            .then((res) => res.data)
            .catch(() => {
                throw new Error("Cannot get todo");
            });
    },
    async updateTodo(id, payload) {
        return apiClient
            .put(`/${id}`, payload)
            .then((res) => res.data)
            .catch(() => {
                throw new Error("Cannot update todo");
            });
    },
};
