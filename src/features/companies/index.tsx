import { FC } from 'react';

import { Card, Radio } from '@/ui';

import styles from './styles.module.scss';
import { useCompanies } from './hooks';

export const Companies: FC = () => {
  const { data: companies } = useCompanies();
  return (
    <Card>
      <div className={styles.companies}>
        <h3>Компания</h3>
        <Radio label="Все" name="transfer" />
        {companies?.map(d => (
          <Radio label={d.name} id={d.id} name="transfer" />
        ))}
      </div>
    </Card>
  );
};
