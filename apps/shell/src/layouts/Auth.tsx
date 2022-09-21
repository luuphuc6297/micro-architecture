import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../provider';

interface AuthLayoutProps {
    children?: React.ReactElement;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <AuthProvider>
            {children}
            {/* <Outlet /> */}
        </AuthProvider>
    );
};

export default AuthLayout;
