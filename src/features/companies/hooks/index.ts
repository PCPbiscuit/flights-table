import { useQuery, QueryOptions } from 'react-query';

type Company = {
  id: string;
  logo: string;
  name: string;
};

type CompaniesCollection = Company[];

export const useCompanies = (options?: QueryOptions<CompaniesCollection>) => {
  return useQuery<CompaniesCollection>([`a1b1c28b32d9785bb26c`], {
    refetchOnWindowFocus: false,
    ...options,
  });
};
