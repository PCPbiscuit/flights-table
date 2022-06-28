import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  name: string;
  checked?: boolean;
  label?: string;
  id?: string;
  value: string;
  onChange: (value: string, name: string) => void;
};

export const Radio: FC<Props> = ({
  name,
  checked,
  label,
  id,
  value,
  onChange,
}) => {
  const handleChange = () => {
    onChange(value, name);
  };
  return (
    <div className={styles.radio}>
      <input
        type="radio"
        name={name}
        defaultChecked={checked}
        id={id}
        value={value}
        onChange={handleChange}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
