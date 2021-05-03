import React from "react";
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import PropTypes from "prop-types";
import useAuth from 'lib/hooks/useAuth';

const SetPasswordForm = ({ onSubmit, error }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { isLoggedIn, user, deleteAuthData } = useAuth()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <p className="text-red-300">Register error: {error.message}</p>
            </div>}
            <div>
                <p>
                    Did you remember your password?
                <Link href="/auth/login">
                        <a>Login</a>
                    </Link>
                </p>
            </div>
            <div>
                <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">Update</button>
            </div>
        </form>
    )
}

SetPasswordForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default SetPasswordForm;