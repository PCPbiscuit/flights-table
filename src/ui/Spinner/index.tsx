import { FC } from 'react';
import styles from './styles.module.scss';

export type Props = {
  fullscreen?: boolean;
};

export const Spinner: FC<Props> = ({ fullscreen }) => {
  return fullscreen ? (
    <div className={styles.fullscreen}>
      <span className={styles.loader} />
    </div>
  ) : (
    <span className={styles.loader} />
  );
};
