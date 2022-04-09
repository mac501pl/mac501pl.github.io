import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {

  preprocess: preprocess({
    scss: {
      prependData: '@import "src/scss/styles.scss";',
      includePaths: 'src/'
    }
  }),

  kit: {
    browser: {
      hydrate: false,
      router: false,
    },
    adapter: adapter(),
    prerender: {
      default: true,
    },
    csp: {
      directives: {
        'default-src': ['none'],
        'style-src': ['self', 'unsafe-inline'],
        'img-src': ['self'],
      }
    }
  }
};

export default config;
