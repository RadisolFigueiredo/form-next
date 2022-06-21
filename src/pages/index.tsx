import type { NextPage } from 'next';
import Head from 'next/head';
import Register from './register';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Trace Finance</title>
      </Head>
      <Register />
    </div>
  );
};

export default Home;
