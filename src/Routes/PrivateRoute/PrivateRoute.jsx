import React, { useContext } from 'react';
import { userContext } from '../../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(userContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className='my-20 w-1/3 text-center flex items-center mx-auto border'>
                <h2 className='text-2xl font-bold'><span className='text-red-500'>Loading</span>....</h2>
            </div>
        )
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login' />
    }

    return children;
};

export default PrivateRoute;