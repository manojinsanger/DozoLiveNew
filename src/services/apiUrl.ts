import axios from "axios";

export const apiUrl = "https://backend.dozolive.com/api";
// export const apiUrl = "http://192.168.31.95:3010/api";


export const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

// https://backend.dozolive.com
// http://localhost:3010/api