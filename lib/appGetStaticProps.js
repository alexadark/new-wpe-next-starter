import { PRIMARY_MENU_QUERY } from './queries';
import { getApolloClient } from '@wpengine/headless';

export const appGetStaticProps = async (context) => {
  const client = getApolloClient(context);
  const primaryMenuData = await client.query({
    query: PRIMARY_MENU_QUERY,
  });

  return {
    primaryMenuData,

  };
};

export const getStaticProps = async (context) => {
  const props = await appGetStaticProps(context, {});
  return {
    props,
  };
};
