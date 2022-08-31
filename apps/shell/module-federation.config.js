// @ts-check

// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set(['react', 'react-dom', 'react-router-dom']);

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
