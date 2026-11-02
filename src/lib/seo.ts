import services from '@/data/services'
import type { Service } from '@/data/services'

export const siteUrl = 'https://drystone.com.au'
export const organizationId = `${siteUrl}/#organization`
const json = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c')

export const organizationSchema = {
  type: 'application/ld+json',
  children: json({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': organizationId,
        name: 'DryStone Construction', legalName: 'PR Civil Supplies Pty Ltd',
        url: siteUrl, logo: `${siteUrl}/images/logo-new.png`,
        telephone: '+61481003030', email: 'info@drystone.com.au',
        areaServed: { '@type': 'AdministrativeArea', name: 'New South Wales, Australia' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: 'Construction & specialist building services',
          itemListElement: services.map((service) => ({ '@type': 'Offer', itemOffered: {
            '@type': 'Service', name: service.name, url: `${siteUrl}/services/${service.id}`,
          } })),
        },
      },
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'DryStone Construction', publisher: { '@id': organizationId } },
    ],
  }),
}

export function pageSeo({ title, description, path, image = '/images/new-home-exterior.jpeg', service }: {
  title: string; description: string; path: string; image?: string; service?: Service
}) {
  const url = `${siteUrl}${path}`
  const graph: Record<string, unknown>[] = [{
    '@type': path === '/contact' ? 'ContactPage' : 'WebPage', '@id': `${url}#webpage`,
    url, name: title, description, inLanguage: 'en-AU',
    isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': organizationId },
  }]
  if (path !== '/') graph.push({
    '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: service?.shortName ?? 'Contact', item: url },
    ],
  })
  if (service) graph.push({
    '@type': 'Service', '@id': `${url}#service`, name: service.name,
    serviceType: service.shortName, description: service.description,
    url, provider: { '@id': organizationId },
    areaServed: { '@type': 'AdministrativeArea', name: 'New South Wales, Australia' },
  })
  return {
    meta: [
      { title }, { name: 'description', content: description },
      { name: 'robots', content: 'index,follow,max-image-preview:large' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'DryStone Construction' },
      { property: 'og:locale', content: 'en_AU' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: `${siteUrl}${image}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${siteUrl}${image}` },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: json({ '@context': 'https://schema.org', '@graph': graph }) }],
  }
}
