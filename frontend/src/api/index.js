import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);
export const getQuizzes = () => API.get('/quizzes');
export const getQuizDetails = (id) => API.get(`/quizzes/${id}`);
export const submitQuiz = (id, answers) => API.post(`/quizzes/${id}/submit`, { answers });
