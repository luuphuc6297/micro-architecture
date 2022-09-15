import { CircularIndeterminate } from '@micro-architecture-coaching-cloud/ui';
import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { Login, Register, SetupPassword, VerifyCode } from 'sso/Module';
import { AuthLayout } from '../layouts';

const Sso = React.lazy(() => import('sso/Module'));
const Workspace = React.lazy(() => import('workspace/Module'));
const People = React.lazy(() => import('people/Module'));
const Discussion = React.lazy(() => import('discussion/Module'));

const Router = () => {
    const appRoutes: RouteObject[] = [
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                {
                    path: 'sso',
                    element: <Sso />,
                    children: [
                        {
                            path: 'login',
                            element: (
                                <React.Suspense fallback={<CircularIndeterminate />}>
                                    <Login />
                                </React.Suspense>
                            ),
                            index: true,
                        },
                        {
                            path: 'register',
                            element: (
                                <React.Suspense fallback={<CircularIndeterminate />}>
                                    <Register />
                                </React.Suspense>
                            ),
                        },
                        {
                            path: 'verify-code',
                            element: (
                                <React.Suspense fallback={<CircularIndeterminate />}>
                                    <VerifyCode />
                                </React.Suspense>
                            ),
                        },
                        {
                            path: 'setup-password',
                            element: (
                                <React.Suspense fallback={<CircularIndeterminate />}>
                                    <SetupPassword />
                                </React.Suspense>
                            ),
                        },
                        {
                            path: 'update-profile',
                            element: (
                                <React.Suspense fallback={<CircularIndeterminate />}>
                                    {/* <UpdateProfileContainer /> */}
                                    <div>Update</div>
                                </React.Suspense>
                            ),
                        },
                        { path: '404', element: <div>Not found</div> },
                        { path: '*', element: <Navigate to="/404" /> },
                    ],
                },
                {
                    path: 'workspace',
                    element: <Workspace />,
                    children: [],
                },
                {
                    path: 'people',
                    element: <People />,
                },
                {
                    path: 'discussion',
                    element: <Discussion />,
                },
            ],
        },
    ];

    return useRoutes(appRoutes);
};

export default Router;
