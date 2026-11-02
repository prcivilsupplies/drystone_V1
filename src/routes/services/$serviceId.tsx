import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import services from '@/data/services'
import { ProjectJourney } from '@/components/ProjectJourney'
import { ArrowUpRight } from 'lucide-react'
import { pageSeo } from '@/lib/seo'

export const Route = createFileRoute('/services/$serviceId')({
  component: ServicePage,
  loader: ({ params }) => {
    const service = services.find((s) => s.id === params.serviceId)
    if (!service) throw notFound()
    return { service }
  },
  head: ({ params }) => {
    const service = services.find((item) => item.id === params.serviceId)
    if (!service) return { meta: [{ title: 'Service not found | DryStone' }, { name: 'robots', content: 'noindex' }] }
    return pageSeo({ title: `${service.shortName} NSW | DryStone`, description: `${service.description} Serving NSW.`, path: `/services/${service.id}`, image: service.image, service })
  },
})

function ServicePage() {
  const { service } = Route.useLoaderData()
  const otherServices = services.filter(
    (s) => s.id !== service.id && s.id !== 'new-home-construction',
  )

  return (
    <div className="service-page premium-page">
      {/* Hero */}
      <section
        className="service-hero relative flex items-end overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(15,46,26,0.3) 0%, rgba(15,46,26,0.88) 100%), url('${service.image}') center/cover no-repeat`,
        }}
      >
        <div className="page-width service-hero-content">
          <div className="max-w-2xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-normal font-semibold mb-6 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
              Back to home
            </Link>
            <span className="section-label">    DryStone Construction</span>
            <h1
              className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight"
            >
              {service.name}
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-lg leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>

      </section>

      {/* Content */}
      <section className="service-details section-space">
        <div className="page-width">
          <div className="service-detail-grid">
            {/* Gallery */}
            <div className="space-y-4">
              {service.imageExamples ? (
                <>
                  <p className="text-sm leading-relaxed text-[#5a5a56]">
                    {service.exampleNote}
                  </p>
                  {service.imageExamples.map((example) => (
                    <figure key={example.image} className="overflow-hidden rounded-none border border-[#e0dbd4]">
                      <img src={example.image} alt={example.alt} loading="lazy" className="block w-full h-auto" />
                      <figcaption className="bg-[#f5f2ed] px-5 py-4 text-sm text-[#0f2e1a]">
                        <p>{example.caption}</p>
                        {example.sourceUrl && <a href={example.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs underline underline-offset-4">
                          Photo source: {example.sourceName}
                        </a>}
                      </figcaption>
                    </figure>
                  ))}
                </>
              ) : (
                <>
              <div className="rounded-none overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {service.galleryImages.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {service.galleryImages.slice(1).map((img, i) => (
                    <div key={i} className="rounded-none overflow-hidden aspect-[4/3]">
                      <img
                        src={img}
                        alt={`${service.name} gallery ${i + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
                </>
              )}
            </div>

            {/* Details */}
            <div className="lg:sticky lg:top-28">
              <span className="section-label">Service details</span>
              <h2
                className="mt-3 text-3xl lg:text-5xl font-black text-[#0f2e1a] leading-tight"
              >
                {service.shortName}
              </h2>
              <div className="w-10 h-1 bg-[#e67e22] mt-4 mb-6" />
              <p className="text-[#5a5a56] leading-relaxed mb-8">
                {service.longDescription}
              </p>

              <h3
                className="text-lg font-bold text-[#0f2e1a] mb-4"

              >
                What’s included
              </h3>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#4a4a46]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="shrink-0 mt-0.5 text-[#1a4d2e]"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" search={{ service: service.id }} className="btn-primary">
                  Get a quote
                </Link>
                <a href="tel:+61481003030" className="btn-primary" style={{ background: 'var(--forest)' }}>
                  Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.id === 'project-management' && <ProjectJourney />}

      {/* Other Services */}
      <section className="related-services section-space" style={{ background: '#f5f2ed' }}>
        <div className="page-width">
          <span className="section-label">Also available</span>
          <h2
            className="mt-3 text-3xl lg:text-5xl font-black text-[#0f2e1a] mb-10"
          >
            {service.id === 'new-home-construction'
              ? 'Specialist services'
              : 'Other services'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                to="/services/$serviceId" params={{ serviceId: s.id }}
                className="service-card group relative overflow-hidden rounded-none block min-h-[200px]"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e1a] via-[#0f2e1a]/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
                  <h3
                    className="font-black text-white text-xl"
                  >
                    {s.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold tracking-normal text-[#e67e22]">
                      View service
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#e67e22]">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="service-enquiry section-space"
        style={{ background: 'linear-gradient(135deg, #0f2e1a 0%, #1a4d2e 100%)' }}
      >
        <div className="page-width">
          <span className="section-label">Ready to start?</span>
          <h2
            className="mt-3 text-3xl lg:text-5xl font-black text-white"
          >
            A considered start.<br /><em>A lasting result.</em>
          </h2>
          <p className="mt-4 text-white/60 text-sm leading-relaxed">
            Get in touch with the DryStone team — we'll assess your project and
            provide a clear, itemised quote with no obligation.
          </p>
          <div className="mt-8">
            <Link to="/contact" search={{ service: service.id }} className="btn-primary text-base px-8 py-4">
              Discuss your project <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
