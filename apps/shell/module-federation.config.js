// @ts-check

// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
    '@emotion/react',
    '@emotion/styled',
    '@hookform/resolvers',
    '@mui/icons-material',
    '@mui/material',
    '@mui/system',
    '@mui/styles',
    'axios',
    'events',
    'html-react-parser',
    'lodash',
    'moment-timezone',
    'react',
    'react-dom',
    'react-router-dom',
    'react-redux',
    'redux-persist',
    'react-query',
    'react-pin-field',
    'react-timezone-select',
    'react-toastify',
    'zustand',
]);

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
    name: 'shell',
    remotes: ['sso', 'workspace', 'people', 'discussion', 'about'],
    shared: (libraryName, defaultConfig) => {
        if (coreLibraries.has(libraryName)) {
            return defaultConfig;
        }

        // Returning false means the library is not shared.
        return false;
    },
};

module.exports = moduleFederationConfig;
