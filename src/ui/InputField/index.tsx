import cx from 'classnames';
import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  icon?: ReactElement;
  name?: string;
  wrapperClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, Props>(
  ({ className, wrapperClassName, onChange, name = '', ...props }, ref) => {
    return (
      <div className={cx(styles.wrapper, wrapperClassName)}>
        <input
          className={className}
          type={props.type || 'text'}
          ref={ref}
          name={name}
          autoComplete={props.autoComplete ? 'on' : 'off'}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  },
);
