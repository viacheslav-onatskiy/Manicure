import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_URL
});

export default axiosInstance;
