import React from "react";
import { useRouter } from 'next/router'
import { useMutation } from "@apollo/client";
import { WP_RESET_USER_PASSWORD } from "lib/queries/auth";
import SetPasswordForm from "components/auth/SetPasswordForm";
import { useToast } from "@chakra-ui/react"
import Router from 'next/router'

const SetPasswordPage = (props) => {

    const router = useRouter()
    const toast = useToast()
    const { key, login } = router.query

    const [setPassword, { loading, error }] = useMutation(WP_RESET_USER_PASSWORD, {
        onCompleted: data => {
            reset({})
            toast({
                title: "Password succesfully reset",
                description: "Your account password has been properly changed!",
                status: "success",
                duration: 1000,
                isClosable: false,
                onCloseComplete: () => Router.push("/auth/login")
            })
        },
        onError: error => {
            console.log("error: ", error.message)
        }
    });

    const onSubmit = data => {
        setPassword({
            variables: {
                key,
                login,
                password: data.password,
            }
        })
    };

    return <SetPasswordForm onSubmit={onSubmit} error={error?.message} />;
}

export default SetPasswordPage;