import axios from "axios";
import { refreshUserToken } from "./auth.api";
import { useAuth } from "./useAuth.store";
import { API_URL } from "./auth.api";

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

// Dodaj token do każdego żądania
api.interceptors.request.use((config) => {
    const token = useAuth.getState().accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Queue dla requestów czekających na refresh
let isRefreshing = false;
let failedQueue: Array<{
    resolve: (value?: any) => void;
    reject: (reason?: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(promise => {
        if (error) {
            promise.reject(error);
        } else {
            promise.resolve(token);
        }
    });
    failedQueue = [];
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            // Jeśli token jest już refreshowany, dodaj request do kolejki
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return api(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // Refreshing the access token
                const res = await refreshUserToken();
                const { access: newAccessToken, user } = res.data;

                // Zaktualizuj store (z userem!)
                useAuth.setState({ 
                    accessToken: newAccessToken, 
                    user,
                    isInitialized: true 
                });

                // Przetwórz kolejkę oczekujących requestów
                processQueue(null, newAccessToken);

                // Wyślij oryginalny request z nowym tokenem
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                // Refresh się nie powiódł - wyloguj
                processQueue(refreshError, null);
                useAuth.getState().logout();
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default api;