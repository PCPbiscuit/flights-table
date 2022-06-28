import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { parseSearch, stringifyParams } from '@/utils';

import { Card, Checkbox } from '@/ui';

import styles from './styles.module.scss';

const data = [
  { id: '1', name: 'Без пересадок', value: '0' },
  { id: '2', name: '1 пересадка', value: '1' },
  { id: '3', name: '2 пересадки', value: '2' },
  { id: '4', name: '3 пересадки', value: '3' },
];

type Props = {
  transfer?: string[];
};

export const Transfers: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params: Props = parseSearch(searchParams);
  const handleChange = (value: string, name: string) => {
    const arrayValue = params?.transfer ? [...params.transfer, value] : [value];
    if (params.transfer?.includes(value)) {
      const filtered = params.transfer.filter(x => x != value);
      return setSearchParams(stringifyParams({ ...params, [name]: filtered }));
    }
    setSearchParams(stringifyParams({ ...params, [name]: arrayValue }));
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
            checked={params.transfer?.includes(d.value)}
          />
        ))}
      </div>
    </Card>
  );
};
