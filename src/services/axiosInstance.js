import axios from "axios";
import configs from "../configs/service";

const axiosInstance = axios.create({
  baseURL: configs.url,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token;

  return config;
});


export default axiosInstance;