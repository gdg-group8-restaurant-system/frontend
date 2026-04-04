import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restaurant-backend-tt3o.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;