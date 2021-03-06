import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from "prop-types";
import useAuth from 'lib/hooks/useAuth';

const LoginForm = ({ onSubmit, error }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { isLoggedIn, user, deleteAuthData } = useAuth()

    useEffect(() => {
        if (isLoggedIn) {
            Router.push("/dashboard")
        }
    }, [isLoggedIn])

    const onLogout = () => {
        deleteAuthData();
    }

    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome {user.username}</h1>
                <div>
                    <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" onClick={onLogout}>Logout</button>
                </div>

            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="block mb-2 text-indigo-500" htmlFor="username">Username</label>
                <input
                    {...register("username", { required: true })}
                    className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                    type="text"
                    name="username"
                />
                {errors.username && errors.username.type === "required" && <span className="text-red-300" >This field is required</span>}
            </div>
            <div>
                <label
                    className="block mb-2 text-indigo-500"
                    htmlFor="password">
                    Password
            </label>
                <input
                    {...register("password", { required: true })}
                    className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                    type="password"
                    name="password"
                />
                {errors.password && errors.password.type === "required" && <span className="text-red-300" >This field is required</span>}
            </div>
            {error && <div>
                <p className="text-red-300">Loggin Error: {error}</p>
            </div>}
            <div>
                <p>
                    Are you new?
                <Link href="/register">
                        <a>Register</a>
                    </Link>
                </p>
                <p>
                    Forgot password?
                <Link href="/forgot-password">
                        <a>Recover</a>
                    </Link>
                </p>
            </div>
            <div>
                <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Login</button>
            </div>
        </form>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default LoginForm;