import { CircularIndeterminate } from '@micro-architecture-coaching-cloud/ui';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/store';

export function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Outlet />
            </PersistGate>
        </Provider>
    );
}

export default App;

export function Login() {
    return <Suspense fallback={<CircularIndeterminate />}>Login container</Suspense>;
}
