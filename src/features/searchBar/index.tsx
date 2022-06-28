import { FC, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { parseSearch, stringifyParams } from '@/utils';
import { InputField, DateField } from '@/ui';

import styles from './styles.module.scss';

export const SearchBar: FC = () => {
  const dests = [
    'PTB',
    'KRS',
    'EKV',
    'HKG',
    'MOW',
    'LOS',
    'EKT',
    'ARH',
    'TRN',
    'HKT',
    'JNB',
    'SRT',
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const params = parseSearch(searchParams);

  const handleDestination = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const qs = value
      ? stringifyParams({ ...params, [name]: value })
      : stringifyParams({ ...params, [name]: undefined });
    setSearchParams(qs);
  };
  const handleDateChange = (date: Date, name: string) => {
    const qs = stringifyParams({
      ...params,
      [name]: date.getTime().toString(),
    });
    setSearchParams(qs);
  };
  console.log(params.dateStart);
  return (
    <div className={styles.search}>
      <InputField
        placeholder="Откуда"
        wrapperClassName={styles.search_field}
        list="destinations"
        onChange={handleDestination}
        name="origin"
        value={params.origin as string}
      />
      <datalist id="destinations">
        {dests
          .filter(
            destination =>
              destination != params.destination && destination != params.origin,
          )
          .map(destination => (
            <option value={destination} />
          ))}
      </datalist>
      <InputField
        placeholder="Куда"
        wrapperClassName={styles.search_field}
        list="destinations"
        onChange={handleDestination}
        name="destination"
        value={params.destination as string}
      />
      <datalist id="destinations">
        {dests
          .filter(
            destination =>
              destination != params.origin && destination != params.destination,
          )
          .map(destination => (
            <option value={destination} />
          ))}
      </datalist>
      <DateField
        className={styles.search_field}
        name="dateStart"
        onChange={handleDateChange}
        selected={
          params.dateStart ? new Date(Number(params.dateStart)) : new Date()
        }
      />
      <DateField
        className={styles.search_field}
        name="dateEnd"
        onChange={handleDateChange}
        selected={
          params.dateEnd ? new Date(Number(params.dateEnd)) : new Date()
        }
        minDate={
          params.dateStart ? new Date(Number(params.dateStart)) : new Date()
        }
      />
    </div>
  );
};
