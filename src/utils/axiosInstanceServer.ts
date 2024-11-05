'use server';
import axios from 'axios';
import { headers } from 'next/headers';

export const axiosInstance = axios.create({
  baseURL: 'https://se-api.sssboom.xyz/api',
  withCredentials: true,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const cookieHeader = headers().get('cookie');
  if (cookieHeader) {
    config.headers['cookie'] = cookieHeader;
  }
  return config;
});
