import { QueryClient } from 'react-query';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  validateStatus: status => status > 0,
});

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        async queryFn({ queryKey }) {
          const res = await api.get(queryKey[0] as string);
          return res.data;
        },
      },
    },
  });
};

export { createQueryClient, api };
