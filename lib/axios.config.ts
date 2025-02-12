"use client";
import axios from "axios";
import { getCookie } from "./utils";

const axiosInstance = axios.create({
  // baseURL:"http://localhost:8080",
  baseURL: "https://edtech-backend-00ii.onrender.com",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("token"); 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
