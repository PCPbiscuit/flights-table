import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  name?: string;
  checked?: boolean;
  label?: string;
  id?: string;
};

export const Radio: FC<Props> = ({ name, checked, label, id }) => {
  return (
    <div className={styles.radio}>
      <input type="radio" name={name} checked={checked} id={id} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
