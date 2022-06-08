import {
  FC,
  ReactElement,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';

import styles from './styles.module.scss';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  icon?: ReactElement;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonProps> = ({
  type = 'button',
  children,
  ...props
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
