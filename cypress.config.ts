import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    specPattern: '**/*.spec.ts(x)',
    indexHtmlFile: './cypress/support/component-index.html',
    viewportWidth: 390,
    viewportHeight: 667,
    videoCompression: 10,
    videoUploadOnPasses: false,
    retries: {
      runMode: 2,
      openMode: 1,
    },
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
