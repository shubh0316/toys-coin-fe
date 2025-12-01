import axios from 'axios';

/**
 * Base URL for backend API.
 *
 * - In production on the server, set NEXT_PUBLIC_API_URL to something like:
 *   - http://localhost:5000   (if Next.js and the API run on the same machine)
 *   - https://your-backend-domain.com
 *
 * - For local development, create `.env.local` in the frontend root with:
 *   NEXT_PUBLIC_API_URL=http://localhost:5000
 */
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, '') || 'http://localhost:5000';

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
    console.error(
      'API error:',
      error.response ? error.response.data : error.message
    );
    return Promise.reject(error);
  }
);

export default axiosInstance;
