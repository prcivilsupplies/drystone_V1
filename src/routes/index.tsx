import { createFileRoute, Link } from '@tanstack/react-router'
import services from '@/data/services'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <CtaSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section
      className="noise-overlay relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        background: `linear-gradient(125deg, rgba(15,46,26,0.92) 0%, rgba(26,77,46,0.78) 50%, rgba(26,77,46,0.5) 100%), url('/images/hero.png') center/cover no-repeat`,
      }}
    >
      {/* Diagonal accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(230,126,34,0.12) 100%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Vertical text */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-10">
        <span
          className="text-white/20 text-xs tracking-[0.4em] uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
        </span>
        <div className="w-px h-16 bg-white/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-2xl">
          <div className="animate-slide-right">
            <span className="section-label">DryStone Construction</span>
          </div>

          <h1
            className="mt-4 text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] animate-fade-up delay-100"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Built to Last.
            <br />
            <span style={{ color: 'var(--amber)' }}>Finished</span>
            <br />
            to Impress.
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-md animate-fade-up delay-200">
            Premium supply and installation of aluminium windows, HEBEL/XCEM/AAC/concrete
            flooring, HEBEL/AAC/concrete wall cladding and professional rendering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </Link>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 animate-fade-up delay-500">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Completed' },
              { value: '4', label: 'Core Services' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-4xl font-black text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-white/50 tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wedge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
    </section>
  )
}

function ServiceCard({
  service,
  size,
}: {
  service: (typeof services)[0]
  size: 'large' | 'small' | 'wide'
}) {
  const sizeClasses = {
    large: 'lg:col-span-7 min-h-[480px]',
    small: 'min-h-[220px]',
    wide: 'lg:col-span-12 min-h-[300px]',
  }

  return (
    <Link
      to={`/services/${service.id}`}
      className={`service-card group relative overflow-hidden rounded-2xl block ${sizeClasses[size]}`}
    >
      <img
        src={service.image}
        alt={service.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e1a] via-[#0f2e1a]/40 to-transparent" />
      <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end z-10">
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="section-label text-xs">DryStone</span>
          <h3
            className={`font-black text-white mt-1 ${size === 'large' ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {service.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-xs font-bold tracking-widest uppercase text-[#e67e22]">
            Learn More
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#e67e22]">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
          <div>
            <span className="section-label">What We Do</span>
            <h2
              className="mt-3 text-4xl lg:text-6xl font-black text-[#0f2e1a]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Services
            </h2>
          </div>
          <p className="text-[#6a6a66] max-w-sm text-sm leading-relaxed">
            Four specialist services, one reliable team. We handle every stage
            from supply through to finished installation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <ServiceCard service={services[0]} size="large" />
          <div className="lg:col-span-5 grid grid-rows-2 gap-5">
            <ServiceCard service={services[1]} size="small" />
            <ServiceCard service={services[2]} size="small" />
          </div>
          <ServiceCard service={services[3]} size="wide" />
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ background: '#f5f2ed' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 lg:w-48 lg:h-48 rounded-xl hidden sm:block"
              style={{ background: 'var(--amber)', opacity: 0.15 }}
            />
            <div className="absolute top-5 left-5 bg-[#0f2e1a] text-white px-4 py-2 rounded-full flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#e67e22]">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
            </div>
          </div>

          <div>
            <span className="section-label">About DryStone</span>
            <h2
              className="mt-3 text-4xl lg:text-6xl font-black text-[#0f2e1a] leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              
              <br />
              Construction
              <br />
              Specialists
            </h2>
            <div className="w-12 h-1 bg-[#e67e22] mt-5 mb-6" />
            <p className="text-[#5a5a56] leading-relaxed mb-5">
              DryStone Construction has been delivering premium building solutions
              to residential and commercial clients 3 years. We specialise in materials and systems that perform —
              Hebel, AAC, aluminium and concrete — installed by tradespeople who
              take genuine pride in their craft.
            </p>
            <p className="text-[#5a5a56] leading-relaxed">
              From a single window replacement to a full external wall cladding
              and render package, we bring the same attention to detail and
              commitment to quality to every project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyUsSection() {
  const points = [
    {
      title: 'Expert Tradies',
      body: 'Licensed and experienced installers who take pride in precision workmanship on every project.',
      iconPath: 'M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z',
    },
    {
      title: 'Local & Reliable',
      body: 'We know the region — and we show up on time, every time.',
      iconPath: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    },
    {
      title: 'Quality Materials',
      body: 'We partner with leading suppliers — Hebel, AAC, Bison, XCEM — so you get products built to last.',
      iconPath: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z',
    },
    {
      title: 'Free Quotes',
      body: "No obligation quotes with transparent, itemised pricing. Know exactly what you're paying for.",
      iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="section-label">Why Choose Us</span>
          <h2
            className="mt-3 text-4xl lg:text-6xl font-black text-[#0f2e1a]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            The DryStone Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="group p-7 rounded-2xl border border-[#e8e4df] hover:border-[#e67e22]/30 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#e67e22]"
                style={{ background: '#f0ece5' }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#1a4d2e] group-hover:text-white transition-colors duration-300"
                >
                  <path d={p.iconPath} />
                </svg>
              </div>
              <h3
                className="text-lg font-bold text-[#0f2e1a] mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-sm text-[#6a6a66] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f2e1a 0%, #1a4d2e 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <span className="section-label">Ready to Build?</span>
        <h2
          className="mt-3 text-4xl lg:text-7xl font-black text-white leading-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Let's Talk About
          <br />
          <span style={{ color: 'var(--amber)' }}>Your Project</span>
        </h2>
        <p className="mt-5 text-white/60 max-w-md mx-auto text-sm leading-relaxed">
          Serving residential and commercial clients across some regions of NSW.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Request a Free Quote
          </Link>
          <a href="tel:+61481003030" className="btn-outline text-base px-8 py-4">
            Call Us Today
          </a>
        </div>
      </div>
    </section>
  )
}
