import axios from 'axios';
import { headers } from 'next/headers';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Cookies'] = headers().get('cookie');
  return config;
});
