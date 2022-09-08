import { getTokenAuth } from '@micro-architecture-coaching-cloud/utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../hooks';

interface AuthProviderProps {
    children: React.ReactNode;
}
export const AuthContext = React.createContext<any | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const token = getTokenAuth();
    const navigate = useNavigate();

    const { isAuth } = useAuthentication();

    React.useEffect(() => {
        if (!isAuth) {
            navigate('/sso/login', { replace: true });
        } else {
            navigate('/workspace', { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth]);

    const contextValue = React.useMemo(
        () => ({
            isLogged: !!token,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
