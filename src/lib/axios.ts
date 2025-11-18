import axios from 'axios';

// Use environment variable for API URL, fallback to backend port 80
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:80';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Ensure cookies are sent
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
