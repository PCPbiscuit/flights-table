import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Card, Checkbox } from '@/ui';

import styles from './styles.module.scss';

const data = [
  { id: '1', name: 'Без пересадок', value: '0' },
  { id: '2', name: '1 пересадка', value: '1' },
  { id: '3', name: '2 пересадки', value: '2' },
  { id: '4', name: '3 пересадки', value: '3' },
];

export const Transfers: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const transferValue = searchParams.getAll('transfer');
  const handleChange = (value: string, name: string) => {
    const arrayValue = transferValue ? [...transferValue, value] : [value];
    const params = Object.fromEntries(searchParams.entries());
    if (transferValue.includes(value)) {
      const filtered = transferValue.filter(x => x != value);
      return setSearchParams({ ...params, [name]: filtered });
    }
    setSearchParams({ ...params, [name]: arrayValue });
  };

  return (
    <Card className={styles.card}>
      <div className={styles.transfers}>
        <h3>Количество пересадок</h3>
        {data.map(d => (
          <Checkbox
            label={d.name}
            key={d.id}
            id={d.name}
            name="transfer"
            value={d.value}
            onChange={handleChange}
            checked={transferValue.includes(d.value)}
          />
        ))}
      </div>
    </Card>
  );
};
