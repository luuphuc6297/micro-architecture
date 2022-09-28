import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { LoginContainer, RegisterContainer, SetupPasswordContainer, VerifyCodeContainer } from '../containers';
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
    return <LoginContainer />;
}

export function Register() {
    return <RegisterContainer />;
}

export function VerifyCode() {
    return <VerifyCodeContainer />;
}

export function SetupPassword() {
    return <SetupPasswordContainer />;
}
