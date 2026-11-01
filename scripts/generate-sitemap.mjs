import { writeFile } from 'node:fs/promises'
import services from '../src/data/services.ts'
const origin = 'https://drystone.com.au'
const paths = ['/', '/contact', ...services.map((service) => `/services/${service.id}`)]
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n')}\n</urlset>\n`
await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`Generated sitemap for ${paths.length} public pages`)
