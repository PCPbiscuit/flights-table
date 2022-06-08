import { FC } from 'react';

import { ReactComponent as PlaneIcon } from '/public/logo.svg';

import { Button, Layout } from '../ui';
import { Transfers } from '../features';

const App: FC = () => {
  return (
    <Layout>
      <header>
        <PlaneIcon />
      </header>
      <main>
        <Transfers />
        <Button>Показать еще 5 билетов</Button>
      </main>
    </Layout>
  );
};

export default App;
