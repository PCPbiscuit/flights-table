import { FC } from 'react';

import { ReactComponent as PlaneIcon } from '/public/logo.svg';

import { Button, Layout } from '../ui';
import { Transfers, Companies, Tabs, Flights, SearchBar } from '../features';

import styles from './styles.module.scss';

const App: FC = () => {
  return (
    <Layout>
      <header>
        <PlaneIcon />
      </header>
      <SearchBar />
      <div className={styles.separator} />
      <main className={styles.main}>
        <div className={styles.side}>
          <Transfers />
          <Companies />
        </div>
        <div className={styles.info}>
          <Tabs />
          <Flights />
          <Button variant="primary" className={styles.moreBtn}>
            Показать еще 5 билетов
          </Button>
        </div>
      </main>
    </Layout>
  );
};

export default App;
