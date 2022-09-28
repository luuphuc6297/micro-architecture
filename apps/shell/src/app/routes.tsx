import { CircularIndeterminate } from '@micro-architecture-coaching-cloud/ui';
import React from 'react';
import { Navigate, RouteObject, Outlet } from 'react-router-dom';
import { Login, Register, SetupPassword, VerifyCode } from 'sso/Module';
import { AuthLayout } from '../layouts';

const Sso = React.lazy(() => import('sso/Module'));
const Workspace = React.lazy(() => import('workspace/Module'));
const People = React.lazy(() => import('people/Module'));
const Discussion = React.lazy(() => import('discussion/Module'));

const MenuLayout = () => (
    <>
        <h1>Test</h1>
        <Outlet />
    </>
);

export const routesConfig: RouteObject[] = [
    {
        path: 'sso',
        element: <MenuLayout />,
        children: [
            {
                path: 'workspace',
                element: <div>workspace</div>,
            },
        ],
    },
];
