import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  name?: string;
  checked?: boolean;
  label?: string;
  id?: string;
};

export const Checkbox: FC<Props> = ({ name, checked, label, id }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name={name} checked={checked} id={id} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
