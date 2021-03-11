import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const API = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// console.log(process.env.REACT_APP_ENDPOINT_BASE_URL);
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
export default API