import { createContext, useContext } from "react";
import { useState } from "react";

export const InititalUserState = {
    email: null,
    uid: null
}

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = (props) => {
    const[userState,setUserState] = useState(InititalUserState);

    const setUser = (userCredential) => {
        setUserState({...userCredential});
    }

    const resetUser = () => {
        setUserState(InititalUserState);
    }
    const value = {...userState, setUser, resetUser}
    return <UserContext.Provider value={value} {...props} />
}