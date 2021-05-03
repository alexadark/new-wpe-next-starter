import React from 'react';
import { AppContext, AppInitialProps } from 'next/app';
import { HeadlessProvider } from '@wpengine/headless/react';
import { ApolloProvider } from '@apollo/client/react';

import { Layout } from 'components';
import { GlobalDataProvider } from 'lib/context/globalDataContext';
import { AuthProvider } from '../lib/hooks/useAuth';
import { link, cache } from '../lib/services/apollo';
import 'styles/wp-styles/styles.css';
import 'styles/globals.css';

import { getApolloClient } from '@wpengine/headless';

const client = getApolloClient();
client.cache = cache;
client.setLink(link);

/* eslint-disable react/jsx-props-no-spreading */
export default function App({
  Component,
  pageProps,
}: AppContext & AppInitialProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    <GlobalDataProvider globalData={pageProps.globalData}>
      <HeadlessProvider pageProps={pageProps}>
        <AuthProvider>
          <ApolloProvider client={client}>
            {/* <Layout> */}
            <Component {...pageProps} />
            {/* </Layout> */}
          </ApolloProvider>
        </AuthProvider>
      </HeadlessProvider>
    </GlobalDataProvider>
  );
}
