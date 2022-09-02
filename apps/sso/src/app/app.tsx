import NxWelcome from './nx-welcome';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/store';

export function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div>SSO here</div>
            </PersistGate>
        </Provider>
    );
}

export default App;
