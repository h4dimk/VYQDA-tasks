import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
  // timeout: 5000,
});

export default instance;
