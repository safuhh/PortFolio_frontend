import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  withCredentials: true, // Crucial for sending JWT HttpOnly cookies automatically
});

export const getProjects = () => api.get('/projects');
export const getSingleProject = (id) => api.get(`/projects/${id}`);

// Admin only operations
export const createProject = (formData) => {
  // Multipart/form-data for image file upload
  return api.post('/projects', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

export const updateProject = (id, formData) => {
  return api.put(`/projects/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Resume operations
export const getResume = () => api.get('/resume');

export const updateResume = (formData) => {
  return api.post('/resume', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

// Public contact submission
export const submitContact = (data) => api.post('/contact', data);

export default api;
