import { projects, resume } from './data';

// Mocking responses to prevent rewriting component data fetching logic
export const getProjects = () => Promise.resolve({ data: projects });

export const getSingleProject = (id) => {
  const project = projects.find(p => p._id === id);
  if (project) {
    return Promise.resolve({ data: project });
  }
  return Promise.reject(new Error('Project not found'));
};

export const getResume = () => Promise.resolve({ data: resume });

// Mocking contact submission
export const submitContact = (data) => {
  console.log('Contact form submitted with data:', data);
  return Promise.resolve({ data: { message: 'Message sent successfully' } });
};
