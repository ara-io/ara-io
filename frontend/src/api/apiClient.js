import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your API Gateway URL

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set up interceptor to attach the access token to the request headers
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Endpoints
export const searchEndpoints = async (query) => {
  const response = await apiClient.get(`/search?query=${query}`);
  return response.data;
};

export const getEndpointDetails = async (endpointId) => {
  const response = await apiClient.get(`/endpoints/${endpointId}`);
  return response.data;
};

export const getRelationships = async (endpointId) => {
  const response = await apiClient.get(`/relationships/${endpointId}`);
  return response.data;
};

// Authentication
export const registerUser = async (userData) => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};
