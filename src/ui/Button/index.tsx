import {
  FC,
  ReactElement,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';
import cx from 'classnames';

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
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={cx(
        styles.button,
        variant == 'primary' ? styles.primary : '',
        className,
      )}
      type={type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
