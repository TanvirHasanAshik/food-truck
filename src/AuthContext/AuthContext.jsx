import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';
import { toast } from 'react-toastify';

export const userContext = createContext();
const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        signOut(auth)
            .then()
    }

    useEffect(() => {
        const subscription = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => subscription();
    }, [])

    const authInfo = {
        loading, user, handleLogout
    };
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;