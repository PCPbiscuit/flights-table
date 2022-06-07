import { FC } from 'react';
import Layout from './Layout';
import { ReactComponent as PlaneIcon } from '/public/logo.svg';

const App: FC = () => {
  return (
    <Layout>
      <header>
        <PlaneIcon />
      </header>
      <main></main>
    </Layout>
  );
};

export default App;
