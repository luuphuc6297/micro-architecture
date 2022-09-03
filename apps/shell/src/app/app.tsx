import { theme } from '@micro-architecture-coaching-cloud/configs';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sso, { Login } from 'sso/Module';
import NxWelcome from './nx-welcome';

const About = React.lazy(() => import('about/Module'));

const Workspace = React.lazy(() => import('workspace/Module'));

const People = React.lazy(() => import('people/Module'));

const Discussion = React.lazy(() => import('discussion/Module'));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
    },
});

export function App() {
    return (
        <React.Suspense fallback={null}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<NxWelcome title="shell" />} />
                        <Route path="about" element={<About />} />
                        <Route path="sso" element={<Sso />}>
                            <Route index={true} element={<Navigate to="/sso/login" />} />
                            <Route path="login" element={<Login />} />
                        </Route>

                        <Route path="workspace" element={<Workspace />} />

                        <Route path="people" element={<People />} />

                        <Route path="discussion" element={<Discussion />} />
                    </Routes>

                    <CssBaseline />
                </ThemeProvider>
            </QueryClientProvider>
        </React.Suspense>
    );
}

export default App;
