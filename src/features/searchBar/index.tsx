import { FC } from 'react';

import { InputField, DateField } from '@/ui';

import styles from './styles.module.scss';

export const SearchBar: FC = () => {
  return (
    <div className={styles.search}>
      <InputField placeholder="Откуда" wrapperClassName={styles.search_field} />
      <InputField placeholder="Куда" wrapperClassName={styles.search_field} />
      <DateField className={styles.search_field} />
      <DateField className={styles.search_field} />
    </div>
  );
};
