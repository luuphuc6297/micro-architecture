import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { SubmitButton } from '@micro-architecture-coaching-cloud/ui';
const About = React.lazy(() => import('about/Module'));

const Sso = React.lazy(() => import('sso/Module'));

const Workspace = React.lazy(() => import('workspace/Module'));

const People = React.lazy(() => import('people/Module'));

const Discussion = React.lazy(() => import('discussion/Module'));

export function App() {
    return (
        <React.Suspense fallback={null}>
            <ul>
                <li>
                    <Link to="/">
                        Home
                        <SubmitButton>Haha</SubmitButton>
                    </Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/sso">Sso</Link>
                </li>

                <li>
                    <Link to="/workspace">Workspace</Link>
                </li>

                <li>
                    <Link to="/people">People</Link>
                </li>

                <li>
                    <Link to="/discussion">Discussion</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<NxWelcome title="shell" />} />
                <Route path="/about" element={<About />} />

                <Route path="/sso" element={<Sso />} />

                <Route path="/workspace" element={<Workspace />} />

                <Route path="/people" element={<People />} />

                <Route path="/discussion" element={<Discussion />} />
            </Routes>
        </React.Suspense>
    );
}

export default App;
