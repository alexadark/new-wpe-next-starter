import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { v4 as uuidv4 } from 'uuid';

import useNetwork from './useNetwork';

const REFRESH_AUTH_TOKEN = gql`
  mutation refreshAuthToken(
    $clientMutationId: String!
    $jwtRefreshToken: String!
  ) {
    refreshJwtAuthToken(
      input: {
        clientMutationId: $clientMutationId
        jwtRefreshToken: $jwtRefreshToken
      }
    ) {
      authToken
    }
  }
`;

function useAuthTokenRefresher(
  apolloAuthData,
  setAuthData,
  deleteAuthData,
  setIsLoading,
) {
  // const isOnline = useNetwork();
  const isOnline = true;
  const [refreshAuthToken] = useMutation(REFRESH_AUTH_TOKEN);

  /**
   * If we have a refresh token but no auth token, fire off
   * the mutation to get a new auth token and cache it.
   */
  useEffect(() => {
    const authToken = apolloAuthData?.authToken || null;
    const refreshToken = apolloAuthData?.refreshToken || null;

    const shouldRefreshAuthToken =
      !authToken && !!refreshToken && isOnline ? true : false;

    if (!shouldRefreshAuthToken) return;
    // setIsLoading(true);
    refreshAuthToken({
      variables: {
        clientMutationId: uuidv4(),
        jwtRefreshToken: refreshToken,
      },
    })
      .then((response) => {
        const { authToken } = response.data.refreshJwtAuthToken;
        // setAuthData({ ...apolloAuthData, authToken, isLoading: false });
        setAuthData({ ...apolloAuthData, authToken });
      })
      .catch(deleteAuthData);
  }, [
    apolloAuthData,
    isOnline,
    refreshAuthToken,
    setAuthData,
    deleteAuthData,
    setIsLoading,
  ]);
}

export default useAuthTokenRefresher;
