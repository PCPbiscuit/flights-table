import { FC } from 'react';

import { Card } from '@/ui';

import styles from './styles.module.scss';
import s7 from '/public/s7.png';
import xiamen from '/public/xiamen.png';

const flightsData = [
  {
    id: 1,
    destination: 'MOW - HKT',
    time: '10:45 – 08:00',
    duration: '21ч 15м',
    connections: [],
    airline: s7,
    price: '13 400',
  },
  {
    id: 2,
    destination: 'MOW - HKT',
    time: '10:45 – 08:00',
    duration: '21ч 15м',
    connections: ['HKG', 'JNB'],
    airline: xiamen,
    price: '13 400',
  },
  {
    id: 3,
    destination: 'MOW - HKT',
    time: '10:45 – 08:00',
    duration: '21ч 15м',
    connections: [],
    airline: s7,
    price: '13 400',
  },
  {
    id: 4,
    destination: 'MOW - HKT',
    time: '10:45 – 08:00',
    duration: '21ч 15м',
    connections: ['HKG', 'JNB'],
    airline: xiamen,
    price: '13 400',
  },
  {
    id: 5,
    destination: 'MOW - HKT',
    time: '10:45 – 08:00',
    duration: '21ч 15м',
    connections: ['HKG', 'JNB'],
    airline: s7,
    price: '13 400',
  },
  {
    id: 6,
    destination: 'MOW - HKT',
    time: '10:45 – 08:00',
    duration: '21ч 15м',
    connections: ['HKG', 'JNB'],
    airline: xiamen,
    price: '13 400',
  },
];

export const Flights: FC = () => {
  return (
    <div className={styles.flights}>
      {flightsData.map(flight => (
        <Card className={styles.flight_card} key={flight.id}>
          <div className={styles.flight_row}>
            <span className={styles.price}>{flight.price} ₽</span>
            <span
              className={styles.image}
              style={{ backgroundImage: `url(${flight.airline})` }}
            />
          </div>
          <div className={styles.flight_row}>
            <div className={styles.entry}>
              <span>{flight.destination}</span>
              <span>{flight.time}</span>
            </div>
            <div className={styles.entry}>
              <span>В пути</span>
              <span>{flight.duration}</span>
            </div>
            <div className={styles.entry}>
              <span>
                {flight.connections.length > 0
                  ? `${flight.connections.length} пересадки`
                  : 'Нет пересадок'}
              </span>
              <span>{flight.connections?.join(', ')}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
