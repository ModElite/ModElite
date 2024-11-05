import axios from 'axios';

export const axiosInstanceClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});