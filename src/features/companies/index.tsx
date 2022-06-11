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
        <Radio label="Все" name="transfer" id="all" value="" checked />
        {companies?.map(company => (
          <Radio
            label={company.name}
            id={company.id}
            value={company.id}
            name="transfer"
            key={company.id}
          />
        ))}
      </div>
    </Card>
  );
};
