import axios from "axios";
import {refreshUserToken} from "./auth.api"
import {useAuth} from "./useAuth.store"
import {API_URL} from "./auth.api"

const api = axios.create({
    baseURL:API_URL,
    withCredentials: true
})

// adding bearer access token to headers
api.interceptors.request.use((config)=>{
    const token = useAuth.getState().accessToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})

api.interceptors.response.use(
    (response)=>response,
    async (error) => {
        const originalRequest = error.config;

        //checking if the request is not being retried
        if (error.response?.status === 401 && !originalRequest._retry)
        {
            originalRequest._retry = true;
            try{
                //refreshing the acces token
                const res = await refreshUserToken();
                const newAccessToken = res.data.access;

                useAuth.setState({accessToken: newAccessToken});
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                //send original request again with new access token
                return api(originalRequest);
            }
            catch
            {
                useAuth.getState().logout();
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
)

export default api;