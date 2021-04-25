import React from 'react';
import Head from 'next/head';
import { appGetStaticProps } from 'lib/appGetStaticProps';

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Main</h1>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async (context) => {
  const globalData = await appGetStaticProps(context);
  return {
    props: {
      globalData,
    },
  };
};
