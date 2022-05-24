export enum ChangeFreq {
   always = 'always',
   hourly = 'hourly',
   daily = 'daily',
   weekly = 'weekly',
   monthly = 'monthly',
   yearly = 'yearly',
   never = 'never'
}

export interface RouteSitemapProps {
   loc: string
   lastmod?: string
   changefreq?: ChangeFreq
   priority?: number
}

export interface IndexedSitemapProps {
   loc: string
   lastmod?: string
}

/**
 * Generates a sitemap string.
 * @param {string} host - The site's hostname
 * @param {RouteSitemapProps[]} routes - Routes array to be injected into the sitemap string
 * @returns {string} - The generated sitemap string.
 * @example
 * generateSitemap('localhost', [
 *    { loc: '/', lastmod: '2020-01-01', changefreq: 'daily', priority: 1 },
 *    { loc: '/foo', lastmod: '2020-01-01', changefreq: 'daily', priority: 0.8 },
 *    { loc: '/bar', lastmod: '2020-01-01', changefreq: 'never', priority: 0.7 }
 *    { loc: '/dinosaurs', lastmod: '2020-01-01', priority: 0.6 }
 * ])
 * 
 * Returns:
 * <?xml version="1.0" encoding="UTF-8"?>
 * <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 *   <url>
 *    <loc>
 *       http://localhost/
 *    </loc>
 *    <lastmod>
 *       2020-01-01
 *    </lastmod>
 *    <changefreq>
 *       daily
 *    </changefreq>
 *    <priority>
 *       1
 *    </priority>
 *   </url>
 *  ...
 * </urlset>
 */
 export function generateSitemap (
	host: string, 
	routes: RouteSitemapProps[]): string {
   const sitemapContents = routes.map(route => {
      const loc = `<loc>${host}${route.loc}</loc>`
      const lastmod = route.lastmod ? 
         `<lastmod>${route.lastmod}</lastmod>` : undefined
      const changefreq = `<changefreq>${route.changefreq ?? 'never'}</changefreq>`
      const priority = `<priority>${route.priority ?? 0.5}</priority>`

      return `<url>${loc}${lastmod ?? ''}${changefreq}${priority}</url>`
   }).join('')

	return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
      sitemapContents
   }</urlset>`
}

/**
 * Generates a siteindex sitemap string
 * @param {string} host - The site's hostname
 * @param {IndexedSitemapProps[]} sitemaps - Sitemap routes array to be injected into the siteindex string
 * @returns {string} - The generated siteindex string.
 * @example
 * generateSitemap('localhost', [
 *    { loc: '/', lastmod: '2020-01-01'},
 *    { loc: '/foo', lastmod: '2020-01-01'},
 *    { loc: '/bar', lastmod: '2020-01-01'},
 *    { loc: '/dinosaurs', lastmod: '2020-01-01' }
 * ])
 * 
 * Returns:
 * <?xml version="1.0" encoding="UTF-8"?>
 * <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 *    <sitemap>
 *       <loc>
 *          http://localhost/
 *       </loc>
 *       <lastmod>
 *          2020-01-01
 *       </lastmod>
 *    </sitemap>
 *    <sitemap>
 *       <loc>
 *          http://localhost/foo
 *       </loc>
 *       <lastmod>
 *          2020-01-01
 *       </lastmod>
 *    </sitemap>
 *       ...
 * </sitemapindex>
 */
export function generateSiteIndex(
   host: string,
   sitemaps: IndexedSitemapProps[]
) {
   const siteIndexContents = sitemaps.map(sitemap => {
      const loc = `<loc>${host}${sitemap.loc}</loc>`
      const lastmod = sitemap.lastmod ? 
         `<lastmod>${sitemap.lastmod}</lastmod>` : undefined

      return `<sitemap>${loc}${lastmod ?? ''}</sitemap>`
   }).join('')

   return `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
      siteIndexContents
   }</sitemapindex>`
}