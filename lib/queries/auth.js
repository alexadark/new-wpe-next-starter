import { gql } from '@apollo/client';

const WP_REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $password: String!
    $email: String!
  ) {
    registerUser(
      input: { username: $username, password: $password, email: $email }
    ) {
      user {
        jwtAuthToken
        jwtRefreshToken
        id
        name
        username
        email
      }
    }
  }
`;

const WP_REFRESH_TOKEN = gql`
  mutation RefreshAuthToken($jwtRefreshToken: String!) {
    refreshJwtAuthToken(input: { jwtRefreshToken: $jwtRefreshToken }) {
      authToken
    }
  }
`;

export { WP_REGISTER_USER, WP_REFRESH_TOKEN };
