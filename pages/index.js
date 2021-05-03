import React from 'react';
import Head from 'next/head';
import Link from "next/link";

import { appGetStaticProps } from 'lib/appGetStaticProps';

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Index Example</h1>

        <h2>Auth</h2>

        <p>
          <Link href="/register">
            <a>Register user</a>
          </Link>
        </p>
        <p>
          <Link href="/login">
            <a>Login user</a>
          </Link>
        </p>

        <p>
          <Link href="/dashboard">
            <a>Private Dashboard</a>
          </Link>
        </p>
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
