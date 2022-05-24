import type { GetServerSideProps } from 'next'
import type { RouteSitemapProps } from '@utils/sitemap'

import fs from 'fs'
import path from 'path'

import { getServicesId } from '@api-utils/content-retrivers/services'
import { generateSitemap, ChangeFreq } from '@utils/sitemap'

const buildDate = new Date().toISOString()

//* Getting other sitemap routes from pages-manifest.json
async function getStaticPages (projBasePath: string): Promise<RouteSitemapProps[]> {
   const nextPagesManifPath = path.join(projBasePath + '/.next/server/pages-manifest.json')
   const nextPManif = await JSON.parse(fs.readFileSync(nextPagesManifPath, 'utf8'))
   
   return Object.keys(nextPManif)
      .filter(key => !key.match(/^\/.+\.xml$/)) //* Removing sitemap files
      .filter(key => !key.match(/^\/(.*\/)*_.+/)) //* Removing next component and special routes
      .filter(key => !key.match(/^(\/.+)*\/(404|500)$/)) //* Removing 404 and 500 pages
      .filter(key => !key.match(/^(\/.+)*\/(\[{1,2}[a-zA-Z-_0-9]*\]{1,2})(\.(js|ts|jsx|tsx))*$/)) //* Filtering out dynamic routes
      .filter(key => !key.match(/^\/api\/.+$/)) //* Filtering out API routes
      .map(page => ({
         loc: `${page}`,
         lastmod: buildDate,
         priority: page === '/' ? 1 : 
            page === '/projects' ? 0.9 :
            page === '/resume' ? 0.8 :
            page === '/this-site' ? 0.7 :
            0.6 // Hypothetically, the contact page should be the only page, so... final else for it
      }))
}

async function getServicesSitemap () {
   const services = await getServicesId(true)
   
   return services.map(svc => ({
      loc: `/this-site/${svc}`
   }))
}


function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   if(!process.env.NEXT_PUBLIC_SITE_URL)
      throw new Error('NEXT_PUBLIC_SITE_URL is not set')
   const basePath: string = process.cwd();

   if(!basePath) return {
      redirect: {
         destination: '/500',
         permanent: false,
      },
   }

   const staticPages = await getStaticPages(basePath)
   const svcDynPages = await getServicesSitemap()

   const sitemap = generateSitemap(process.env.NEXT_PUBLIC_SITE_URL as string, [
      ...staticPages,
      ...svcDynPages
   ])
   
   res.setHeader('Content-Type', 'text/xml')
   res.write(sitemap)
   res.end()

   return {
      props: {}
   }
}

export default SiteMap