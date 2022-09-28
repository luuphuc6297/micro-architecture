import { InfoContext, InfoContextProperty } from '@micro-architecture-coaching-cloud/common';
import { theme } from '@micro-architecture-coaching-cloud/ui';
import { CLIENT_EVENT } from '@micro-architecture-coaching-cloud/utils';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Router from './routes';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
    },
});

export function App() {
    const [info, setInfo] = React.useState<InfoContextProperty>({});

    const eventHandler = (data: any) => {
        console.log('IN', data);
    };

    React.useEffect(() => {
        window.addEventListener(CLIENT_EVENT.SYNC_DATA, eventHandler);
        return () => {
            window.removeEventListener(CLIENT_EVENT.SYNC_DATA, eventHandler);
        };
    });

    return (
        <React.Suspense fallback={null}>
            <InfoContext.Provider value={info}>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <Router />
                        <CssBaseline />
                    </ThemeProvider>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </QueryClientProvider>
            </InfoContext.Provider>
        </React.Suspense>
    );
}

export default App;
