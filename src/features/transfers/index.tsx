import { FC } from 'react';

import { Card, Checkbox } from '@/ui';

import styles from './styles.module.scss';

const data = [
  { id: 1, name: 'Без пересадок' },
  { id: 2, name: '1 пересадка' },
  { id: 3, name: '2 пересадки' },
  { id: 4, name: '3 пересадки' },
];

export const Transfers: FC = () => {
  return (
    <Card>
      <div className={styles.transfers}>
        <h3>Количество пересадок</h3>
        {data.map(d => (
          <Checkbox label={d.name} id={d.name} name="transfer" />
        ))}
      </div>
    </Card>
  );
};
