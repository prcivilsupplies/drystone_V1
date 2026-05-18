import { Link } from '@tanstack/react-router'

export function Footer() {
  const services = [
    { label: 'Aluminium Windows', to: '/services/aluminium-windows' },
    { label: 'Concrete Flooring', to: '/services/flooring' },
    { label: 'Wall Cladding', to: '/services/wall-cladding' },
    { label: 'Professional Rendering', to: '/services/rendering' },
  ]

  return (
    <footer className="bg-[#0f2e1a] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/images/logo-new.png"
              alt="DryStone Construction"
              className="h-16 w-auto object-contain mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium construction solutions for some regions in NSW surrounds.
              Supply and installation you can build on.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#e67e22]">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#e67e22] group-hover:w-6 transition-all duration-200" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+61481003030"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-0.5 text-[#e67e22]">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  +61 481 00 3030 
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@drystone.com.au"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-0.5 text-[#e67e22]">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  info@drystone.com.au
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="mt-2 btn-primary text-xs px-4 py-2.5 inline-flex"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-align-center">
          <p className="text-xs text-white/30 text-align-center">
            © 2023 PR Civil Supplies Pty Ltd Trading as DryStone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
