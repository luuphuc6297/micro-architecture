import { InfoContext, InfoContextProperty, theme } from '@micro-architecture-coaching-cloud/ui';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Router from './routes';
import { eb, CLIENT_EVENT } from '@micro-architecture-coaching-cloud/utils';

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

    const loadinfo = (data: InfoContextProperty) => {
        console.log("IN");
        setInfo(data);
    };

    React.useEffect(() => {
        eb.on(CLIENT_EVENT.SYNC_DATA, loadinfo);
        return () => {
            eb.off(CLIENT_EVENT.SYNC_DATA, loadinfo);
        }
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
