import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import services from '@/data/services'

export const Route = createFileRoute('/services/$serviceId')({
  component: ServicePage,
  loader: ({ params }) => {
    const service = services.find((s) => s.id === params.serviceId)
    if (!service) throw notFound()
    return { service }
  },
})

function ServicePage() {
  const { service } = Route.useLoaderData()
  const otherServices = services.filter((s) => s.id !== service.id)

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden pt-24"
        style={{
          background: `linear-gradient(to bottom, rgba(15,46,26,0.75) 0%, rgba(15,46,26,0.9) 100%), url('${service.image}') center/cover no-repeat`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
          <div className="max-w-2xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-widest uppercase font-semibold mb-6 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
              Back to Home
            </Link>
            <span className="section-label">DryStone Construction</span>
            <h1
              className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {service.name}
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-lg leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {service.galleryImages.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {service.galleryImages.slice(1).map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden aspect-[4/3]">
                      <img
                        src={img}
                        alt={`${service.name} gallery ${i + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="lg:sticky lg:top-28">
              <span className="section-label">Service Detail</span>
              <h2
                className="mt-3 text-3xl lg:text-5xl font-black text-[#0f2e1a] leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {service.shortName}
              </h2>
              <div className="w-10 h-1 bg-[#e67e22] mt-4 mb-6" />
              <p className="text-[#5a5a56] leading-relaxed mb-8">
                {service.longDescription}
              </p>

              <h3
                className="text-lg font-bold text-[#0f2e1a] mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What's Included
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
                <Link to="/contact" className="btn-primary">
                  Get a Quote
                </Link>
                <a href="tel:+61481003030" className="btn-primary" style={{ background: 'var(--forest)' }}>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 lg:py-20" style={{ background: '#f5f2ed' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="section-label">Also Available</span>
          <h2
            className="mt-3 text-3xl lg:text-5xl font-black text-[#0f2e1a] mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="service-card group relative overflow-hidden rounded-2xl block min-h-[200px]"
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
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {s.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#e67e22]">
                      View Service
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
        className="py-16 lg:py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #0f2e1a 0%, #1a4d2e 100%)' }}
      >
        <div className="max-w-xl mx-auto px-6">
          <span className="section-label">Ready to Start?</span>
          <h2
            className="mt-3 text-3xl lg:text-5xl font-black text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Request a Free Quote
          </h2>
          <p className="mt-4 text-white/60 text-sm leading-relaxed">
            Get in touch with the DryStone team — we'll assess your project and
            provide a clear, itemised quote with no obligation.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
