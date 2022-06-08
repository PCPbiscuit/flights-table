import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode;
};

export const Card: FC<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
