import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  name?: string;
  checked?: boolean;
  label?: string;
  id?: string;
  value: string;
};

export const Radio: FC<Props> = ({ name, checked, label, id, value }) => {
  return (
    <div className={styles.radio}>
      <input
        type="radio"
        name={name}
        defaultChecked={checked}
        id={id}
        value={value}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
