import { useQuery, QueryOptions } from 'react-query';

type Flight = {
  id: string;
  info: {
    stops: string[];
    origin: string;
    dateEnd: number;
    dateStart: number;
    destination: string;
  };
  price: number;
  companyId: string;
};

type FlightsCollection = Flight[];

export const useFlights = (options?: QueryOptions<FlightsCollection>) => {
  return useQuery<FlightsCollection>([`163b5e66df9f2741243e`], {
    refetchOnWindowFocus: false,
    ...options,
  });
};
