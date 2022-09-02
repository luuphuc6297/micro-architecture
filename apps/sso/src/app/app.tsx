import NxWelcome from './nx-welcome';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/store';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { CircularIndeterminate } from '@micro-architecture-coaching-cloud/ui';

export function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {/* <Routes> */}
                    <Route path="/sso" element={<Outlet />}>
                        <Route element={<Navigate to="/sso/login" />}>
                            <Route
                                path="sso/login"
                                element={<Suspense fallback={<CircularIndeterminate />}>Login container</Suspense>}
                            />
                        </Route>
                    </Route>
                {/* </Routes> */}
            </PersistGate>
        </Provider>
    );
}

export default App;
