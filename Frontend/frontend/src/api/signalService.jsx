import axios from 'axios';
const API_URL = 'http://localhost:5000/api/signals'; // Adjust to your backend port

export const getSignals = () => axios.get(`${API_URL}`);
export const createSignal = (data) => axios.post(`${API_URL}`, data);