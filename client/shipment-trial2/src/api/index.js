import axios from "axios";
import store from "../store/index";

const api = axios.create({
    baseURL: "http://localhost:9191/api",
});

api.interceptors.request.use(function (config) {
    config.headers.Authorization = store.getState()?.authToken;
    return config;
});

export default api;
