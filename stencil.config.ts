import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'frame',
  taskQueue: 'async',
  globalStyle: 'src/assets/bootstrap.css',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'frame',
      proxiesFile: 'generated/frame-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: 'loader',
      dir: 'generated/frame/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: 'generated/frame/www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass()
  ]
};
