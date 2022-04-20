/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/loading";
import { Authentication } from "../firebase/firebase";
import { InititalUserState, useUser } from "./user";

const AuthStateChangeProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const user = useUser();
    const { setUser } = user;

    const InititateAuthStateChange = () => {
        Authentication().onAuthStateChanged((user) => {
            if (user) {
                setUser({ email: user.email, uid: user.uid })
                console.log('User is authenticated');
            } else {
                setUser(InititalUserState)
                console.log('User is not authenticated');
            }
            setIsLoading(false);
        })
    }

    useEffect(() => {
        InititateAuthStateChange();
    }, [])

    if (isLoading) {
        return (
           <Loading/>
        )
    }

    return children
}

export default AuthStateChangeProvider;