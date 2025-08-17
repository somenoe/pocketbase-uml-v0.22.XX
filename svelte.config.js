import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ pages: 'app', assets: 'app' }),
    prerender: { handleMissingId: 'ignore' },
    appDir: 'a',
    paths: {
      base: process.env.BASE_PATH || ''
    }
  }
};

export default config;
