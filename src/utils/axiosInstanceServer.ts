import axios from 'axios';
import { headers } from 'next/headers';

export const axiosInstanceServer = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstanceServer.interceptors.request.use((config) => {
  const cookieHeader = headers().get('cookie');
  if (cookieHeader) {
    config.headers['cookie'] = cookieHeader;
  }
  return config;
});
