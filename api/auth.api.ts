import axios from "axios";

export const API_URL = "http://127.0.0.1:8000"

export const registerUser = async (username: string, email: string, password: string) => {
    return axios.post(`${API_URL}/register/`, { username, email, password });
}

export const loginUser = async (email: string, password: string) => {
    return axios.post(`${API_URL}/login/`, { email, password });
}

export const refreshUserToken = async () => {
    return axios.post(`${API_URL}/refresh/`);
}