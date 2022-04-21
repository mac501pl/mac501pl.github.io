import { dev } from '$app/env';
import { minify, type Options } from 'html-minifier-terser';
import { parse, HTMLElement } from 'node-html-parser';
import { createHash } from 'crypto';

const options: Options = {
  collapseWhitespace: true,
  decodeEntities: true,
  html5: true,
  minifyCSS: true,
  removeComments: true,
  removeRedundantAttributes: true,
};

const generateInlineStyleHashes = async (document: HTMLElement): Promise<Array<string> | undefined> => {
  const tagsWithStyles = document.querySelectorAll('*[style]');

  if (tagsWithStyles.length === 0) {
    return undefined;
  }

  const minifiedTags = await Promise.all(tagsWithStyles.map(element => {
    const clone = element.clone() as HTMLElement;
    clone.innerHTML = "";
    return minify(clone.outerHTML, options);
  }));

  const styles = minifiedTags.map(element => {
    const parsedHTMLElement = parse(element).querySelector('*[style]');

    if (!parsedHTMLElement) {
      throw new Error("Element doesn't have a style tag while it should!");
    }

    return parsedHTMLElement.getAttribute('style') as string;
  });

  const hashes = styles.map(style => createHash('sha256').update(style).digest('base64'));
  return hashes.map(hash => `'sha256-${hash}'`);
}

const applyInlineStyleHashCSP = (hashes: Array<string>, document: HTMLElement): void => {
  const cspTag = document.querySelector('head > meta[http-equiv="content-security-policy"]');

  if (!cspTag) {
    throw new Error("No CSP tag detected");
  }

  const cspTagContent = cspTag.getAttribute('content');

  if (!cspTagContent) {
    throw new Error("CSP tag without content detected");
  }

  const cspStyleSrcContent = (/^.*(style-src)(?<content>.*?)(;|$)/.exec(cspTagContent)?.groups as { content: string }).content;
  const cspTagContentWithHashes = cspTagContent.replace(/(?<=style-src).*?(?=;|$)/, `${cspStyleSrcContent} 'unsafe-hashes' ${hashes.join(' ')}`)

  cspTag.setAttribute('content', cspTagContentWithHashes);
}

export async function handle({ event, resolve }) {
  const response = await resolve(event);

  if (response.headers.get('content-type')?.startsWith('text/html') && !dev) {
    const body = await response.text();
    const parsedHTML = parse(body);
    const hashes = await generateInlineStyleHashes(parsedHTML);

    if (hashes && hashes.length > 0) {
      applyInlineStyleHashCSP(hashes, parsedHTML);
    }

    const minified = await minify(parsedHTML.toString(), options);
    return new Response(minified, response);
  }

  return response;
}
