import { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Card: FC<Props> = ({ children, className }) => {
  return <div className={cx(styles.card, className)}>{children}</div>;
};
