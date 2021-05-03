import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import useAuth from 'lib/hooks/useAuth';
import { WP_REGISTER_USER } from 'lib/queries/auth';
import RegisterForm from 'components/auth/RegisterForm';

/**
 * The register user page (General purpose)
 */
const RegisterPage = () => {
  const { isLoggedIn, setAuthData } = useAuth();

  const [registerUser, { loading, error }] = useMutation(WP_REGISTER_USER, {
    onCompleted: (data) => {
      setAuthData({
        authToken: data.registerUser.user.authToken,
        refreshToken: data.registerUser.user.jwtRefreshToken,
        user: data.registerUser.user,
      });
    },
    onError: (error) => {
      console.error(`[RegisterPage]: ${error.message}`);
    },
  });

  const onSubmit = (data,) => {
    registerUser({
      variables: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      Router.push('/dashboard');
    }
  }, [isLoggedIn]);

  if (loading) return <p>Registering ...!</p>;

  return <RegisterForm onSubmit={onSubmit} error={error?.message} />;
};

export default RegisterPage;
