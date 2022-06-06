import styles from './app.module.scss';
import { FC } from 'react';
import { ReactComponent as PlaneIcon } from '/public/logo.svg';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <PlaneIcon />
    </div>
  );
};

export default App;
