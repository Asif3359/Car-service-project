import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user , setUser]=useState(null);
    const [loading , setLoading]=useState(true);

    

    const authInfo ={
        user,

    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;