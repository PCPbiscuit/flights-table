import { useQuery, QueryOptions } from 'react-query';
import { parseSearch, filterData } from '@/utils';

type Flight = {
  id: string;
  info: {
    stops: string[];
    origin: string;
    dateEnd: number;
    dateStart: number;
    destination: string;
    duration: number;
  };
  price: number;
  companyId: string;
};

export type FlightsCollection = Flight[];

export const useFlights = (
  params?: URLSearchParams,
  options?: QueryOptions<FlightsCollection>,
) => {
  const query = useQuery<FlightsCollection>([`163b5e66df9f2741243e`], {
    refetchOnWindowFocus: false,
    ...options,
  });
  const parsedQs = params && parseSearch(params);
  const filtered =
    parsedQs &&
    filterData(query.data || [], {
      stops: parsedQs.transfer as string[],
      companyId: parsedQs.company as string,
      origin: parsedQs.origin as string,
      destination: parsedQs.destination as string,
      dateStart: parsedQs.dateStart as string,
      dateEnd: parsedQs.dateEnd as string,
    });
  return { ...query, data: filtered };
};
