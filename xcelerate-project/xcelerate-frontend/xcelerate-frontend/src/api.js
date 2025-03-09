import axios from 'axios';

const API_BASE_URL = 'http://localhost/xcelerate-backend/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Authorization token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fetch players
export const fetchPlayers = async () => {
  try {
    const response = await api.get('/players.php');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch players');
  }
};

// Fetch player details
export const fetchPlayerDetails = async (id) => {
  try {
    const response = await api.get(`/player_details.php?id=${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch player details');
  }
};

export default api;
