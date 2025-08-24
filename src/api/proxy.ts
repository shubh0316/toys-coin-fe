//@ts-nocheck
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = `${API_BASE_URL}/${req.query.path?.join('/')}`;
    console.log(url, "lllll");
    // Forward the request to the backend API
    const response = await axios({
      method: req.method,
      url,
      headers: {
        ...req.headers,
        host: undefined, // Remove 'host' header to avoid conflict
      },
      data: req.body,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Proxy Error:', error.message);

    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
