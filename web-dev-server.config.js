import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server.js';

export default pfeDevServerConfig({
  nodeResolve: true,
  rootDir: '.',
  // importMap: {
  //   imports: {
  //     "/elements/rh-footer/rh-footer.js": "/elements/rh-footer/rh-footer.ts",
  //   },
  // },
});
