import { FC } from 'react';

import styles from './layout.module.scss';
import { Container } from '../';

type Props = {
  children?: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Container>{children}</Container>
    </div>
  );
};
