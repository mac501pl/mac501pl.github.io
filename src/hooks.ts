import { minify, type Options } from 'html-minifier-terser';

const options: Options = {
  collapseWhitespace: true,
  decodeEntities: true,
  html5: true,
  minifyCSS: true,
  removeComments: true,
  removeRedundantAttributes: true,
};

export async function handle({ event, resolve }) {
  const response = await resolve(event);

  if (response.headers.get('content-type').startsWith('text/html')) {
    const body = await response.text();
    return new Response(await minify(body, options), response);
  }

  return response;
}