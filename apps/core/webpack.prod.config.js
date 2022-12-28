const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
     ['auth', 'https://exquisite-paletas-ea1d46.netlify.app'],
     ['core', 'https://exquisite-paletas-ea1d46.netlify.app'],
     ['intake', 'https://exquisite-paletas-ea1d46.netlify.app'],
     ['panel', 'https://exquisite-paletas-ea1d46.netlify.app'],
  ]
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'https://app1.example.com'],
   *   ['app2', 'https://app2.example.com'],
   * ]
   */
});
