import { FC } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';

import { Card } from '@/ui';
import { convertMsToHM, converUnixToDate, pluralize } from '@/utils';

import styles from './styles.module.scss';
import s7 from '/public/s7.png';
import xiamen from '/public/xiamen.png';
import { useFlights } from './hooks';
import { useCompanies } from '../companies/hooks';

type imagesType = {
  [key: string]: string;
};
const images: imagesType = {
  'S7 Airlines': s7,
  XiamenAir: xiamen,
};

export const Flights: FC = () => {
  const [searchParams] = useSearchParams();
  const { data: flights, isLoading } = useFlights(searchParams);
  const { data: companies } = useCompanies();
  if (isLoading)
    return (
      <SkeletonTheme baseColor={'#fff'} highlightColor="#2196F3">
        <Skeleton
          count={15}
          duration={1}
          height={115}
          style={{ marginBottom: '20px' }}
        />
      </SkeletonTheme>
    );

  return (
    <div className={styles.flights}>
      {flights?.map(flight => {
        const company = companies?.find(
          company => company.id == flight.companyId,
        )?.name;
        const image = company ? images[company] : '';
        const duration = convertMsToHM(flight.info?.duration);
        const startDate = converUnixToDate(flight.info.dateStart);
        const endDate = converUnixToDate(flight.info.dateEnd);
        return (
          <Card className={styles.flight_card} key={flight.id}>
            <div className={styles.flight_row}>
              <span className={styles.price}>
                {flight.price.toLocaleString('ru-RU')} ₽
              </span>
              {company && (
                <span
                  className={styles.image}
                  style={{ backgroundImage: `url(${image})` }}
                />
              )}
            </div>
            <div className={styles.flight_row}>
              <div className={styles.entry}>
                <span>
                  {flight.info?.origin} - {flight.info?.destination}
                </span>
                <span>{`${startDate} - ${endDate}`}</span>
              </div>
              <div className={styles.entry}>
                <span>В пути</span>
                <span>{duration}</span>
              </div>
              <div className={styles.entry}>
                <span>
                  {flight.info?.stops.length > 0
                    ? `${pluralize(flight.info?.stops.length, [
                        'пересадка',
                        'пересадки',
                        'пересадок',
                      ])}`
                    : 'Нет пересадок'}
                </span>
                <span>{flight.info?.stops?.join(', ')}</span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
