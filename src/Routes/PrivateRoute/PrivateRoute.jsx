import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return (
            <div className='flex justify-center items-center h-[80vh]'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    else if (user?.email) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;