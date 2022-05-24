import type { GetServerSideProps } from 'next'
import fs from 'fs'
import path from 'path'

//* Getting sitemap routes from pages-manifest.json
async function getAllSitemaps (basePath: string) {
   const routes_manifest_path = path.join(basePath + '/.next/server/pages-manifest.json')
   const routes_manifest = await JSON.parse(fs.readFileSync(routes_manifest_path, 'utf8'))
   
   //* Getting pages paths form manifest keys
   return Object.keys(routes_manifest)
      .filter(key => key.match(/^\/.+\.xml$/)) //* Removing non-sitemap files
}

async function generateRobotsTxt(basePath: string): Promise<string> {
   const sitemaps = await getAllSitemaps(basePath)

   return ['# *',
   'User-agent: *',
   'Allow: /',
   '\n',
   '# Host',
   `Host: ${process.env.NEXT_PUBLIC_SITE_URL}`,
   '\n',
   '# Sitemaps',
   `${sitemaps.map(sitemap => `Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}${sitemap}`).join('\n')}`,
   ].join('\n')
}

function RobotsTxt() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   const basePath = process.cwd()

   if(!basePath) return {
      redirect: {
         destination: '/500',
         permanent: false
      }
   }

   const robotsTxt = await generateRobotsTxt(basePath)

   res.setHeader('Content-Type', 'text/txt')
   res.write(robotsTxt)
   res.end()

   return {
      props: {}
   }
}

export default RobotsTxt