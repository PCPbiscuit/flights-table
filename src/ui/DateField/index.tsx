import DatePicker, { registerLocale } from 'react-datepicker';
import { FC, useState } from 'react';
import cx from 'classnames';
import ru from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.scss';

registerLocale('ru', ru);

type Props = {
  children?: React.ReactNode;
  className?: string;
  selected?: Date;
  onChange: (arg0: Date, name: string) => void;
  name: string;
  minDate?: Date;
};

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const DateField: FC<Props> = ({
  className,
  selected,
  onChange,
  name,
  minDate,
}) => {
  const [startDate, setStartDate] = useState(selected || new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
    onChange && onChange(date, name);
  };
  console.log(minDate);
  return (
    <div className={cx(styles.wrapper, className)}>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        className={styles.date}
        minDate={minDate || new Date()}
        dayClassName={() => styles.day}
        locale="ru"
        showPopperArrow={false}
        renderCustomHeader={({ date, increaseMonth, decreaseMonth }) => (
          <div className={styles.header}>
            <button onClick={decreaseMonth} className={styles.control}>
              {'<'}
            </button>
            {date
              .toLocaleString('RU-ru', { year: 'numeric', month: 'long' })
              .slice(0, -3)}
            <button onClick={increaseMonth} className={styles.control}>
              {'>'}
            </button>
          </div>
        )}
      />
    </div>
  );
};
