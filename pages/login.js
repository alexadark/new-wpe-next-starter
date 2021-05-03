import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { WP_LOGIN_USER } from "lib/queries/auth";
import LoginForm from "components/auth/LoginForm";
import useAuth from 'lib/hooks/useAuth';

const LoginPage = () => {
    const { setAuthData } = useAuth()

    const [login, { loading, error }] = useMutation(WP_LOGIN_USER, {
        onCompleted: data => {
            setAuthData({
                authToken: data.login.authToken,
                refreshToken: data.login.user.jwtRefreshToken,
                user: data.login.user
            })
        },
        onError: error => {
            console.error(`[LoginPage]: ${error.message}`);
        }
    });

    const onSubmit = data => {
        login({
            variables: {
                username: data.username,
                password: data.password
            }
        })
    };

    if (loading) return <p>Loging in ...!</p>;
    return <LoginForm onSubmit={onSubmit} error={error?.message} />;
}

export default LoginPage