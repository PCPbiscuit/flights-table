import { FC } from 'react';
import styles from './layout.module.scss';

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
export default Layout;
