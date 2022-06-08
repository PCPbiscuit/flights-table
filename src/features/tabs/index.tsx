import { FC, useState } from 'react';

import { Button } from '@/ui';
import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode;
};

const options = [
  { id: 1, title: 'Самый дешевый' },
  { id: 2, title: 'Самый быстрый' },
  { id: 3, title: 'Оптимальный' },
];

export const Tabs: FC<Props> = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className={styles.tabs}>
      {options.map(option => (
        <Button
          key={option.id}
          onClick={() => setSelected(option.id)}
          variant={selected == option.id ? 'primary' : 'secondary'}
        >
          {option.title}
        </Button>
      ))}
    </div>
  );
};
