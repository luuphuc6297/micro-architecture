/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-check

const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');
const path = require('path');

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const defaultConfig = {
    ...baseConfig,
    // @ts-ignore
    resolve: {
        store: path.resolve(__dirname, 'src/store'),
    },
};

module.exports = withModuleFederation(defaultConfig);
