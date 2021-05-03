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

const WP_LOGIN_USER = gql`
  mutation LoginUserMutation(
    $username: String!
    $password: String!
  ) {
    login(input: {
        username: $username,
        password: $password
    }) {
        authToken
        user {
            id
            name
            username 
            email
            jwtAuthToken  
        }
    }
  }
`;

const WP_SEND_PASSWORD_RESET = gql`
  mutation($username: String!) {
    sendPasswordResetEmail(input: { username: $username }) {
      user {
        username
      }
    }
  }
`;

export {
  WP_REGISTER_USER,
  WP_REFRESH_TOKEN,
  WP_LOGIN_USER,
  WP_SEND_PASSWORD_RESET
};
