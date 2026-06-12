import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  withCredentials: true, // Crucial for reading/writing HttpOnly cookies
});

export const adminLogin = (email, password) =>
  api.post('/auth/login', { email, password });

export const adminLogout = () =>
  api.post('/auth/logout');

export const checkAdminAuth = () =>
  api.get('/auth/me');

export default api;
