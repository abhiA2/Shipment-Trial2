import api from "./";

export default {
    login: (payload) => api.post("/auth/login", payload),
    register: (payload) => api.post("/auth/register", payload),
    logout: () => api.post("/auth/logout"),
};
