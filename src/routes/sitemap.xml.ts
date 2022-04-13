export async function get() {
  return {
    headers: {
      'Content-Type': 'application/xml'
    },
    body: `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://mac501pl.github.io</loc>
        </url>
        <url>
          <loc>https://mac501pl.github.io/portfolio</loc>
        </url>
        <url>
          <loc>https://mac501pl.github.io/contact</loc>
        </url>
      </urlset>
    `.trim()
  };
}
