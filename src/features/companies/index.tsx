import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Card, Radio } from '@/ui';

import styles from './styles.module.scss';
import { useCompanies } from './hooks';

export const Companies: FC = () => {
  const { data: companies } = useCompanies();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (value: string, name: string) => {
    setSearchParams({ [name]: value });
  };
  const transferValue = searchParams.get('transfer');
  return (
    <Card>
      <div className={styles.companies}>
        <h3>Компания</h3>
        <Radio
          label="Все"
          name="transfer"
          id="all"
          value=""
          checked
          onChange={handleChange}
        />
        {companies?.map(company => (
          <Radio
            label={company.name}
            id={company.id}
            value={company.id}
            name="transfer"
            key={company.id}
            onChange={handleChange}
            checked={transferValue == company.id}
          />
        ))}
      </div>
    </Card>
  );
};
