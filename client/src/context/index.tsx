import { createContext, useState } from 'react';
import { loginWithGoogle } from '../api/firebase/login';

const AuthContext = createContext<any>(null);

const AuthProvider = (props: any) => {
    const [user, setUser] = useState<{ uid: string; displayName: string | null; } | null>(null);

    const login = async () => {
        const user = await loginWithGoogle();

        if (!user) {
            // TODO: Handle failed login
        }

        setUser(user);
    };

    const value = { user, login };

    return <AuthContext.Provider value={ value } {...props } />;
};

export { AuthContext, AuthProvider };