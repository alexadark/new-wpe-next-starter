import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from "prop-types";
import useAuth from 'lib/hooks/useAuth';

const ForgotPasswordForm = ({ onSubmit, error }) => {

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
            {error && <div>
                <p className="text-red-300">Error: {error.message}</p>
            </div>}
            <div>
                <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Send</button>
            </div>
        </form>
    )
}

ForgotPasswordForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default ForgotPasswordForm;