import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import services from '@/data/services'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname
  const isHome = currentPath === '/'
  const serviceMenuItems = services.filter(
    (service) =>
      service.id !== 'new-home-construction' &&
      service.id !== 'project-management',
  )
  const isServiceMenuActive = serviceMenuItems.some(
    (service) => currentPath === `/services/${service.id}`,
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [currentPath])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Contact', to: '/contact' },
  ]

  const headerBg = isHome
    ? scrolled
      ? 'bg-[#0f2e1a] shadow-xl'
      : 'bg-transparent'
    : 'bg-[#0f2e1a] shadow-xl'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${headerBg}`}
      style={{ transition: 'background 0.4s ease, box-shadow 0.4s ease' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo-new.png"
              alt="DryStone Construction"
              className="h-18 lg:h-22 xl:h-26 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link text-sm font-semibold tracking-widest uppercase text-white/90 hover:text-white transition-colors duration-200 ${
                currentPath === '/' ? 'active text-white' : ''
              }`}
            >
              Home
            </Link>

            <Link to="/services/new-home-construction" className={`nav-link text-sm font-semibold tracking-widest uppercase text-white/90 hover:text-white ${currentPath === '/services/new-home-construction' ? 'active text-white' : ''}`}>
              New Homes
            </Link>
            <Link to="/services/project-management" className={`nav-link text-sm font-semibold tracking-widest uppercase text-white/90 hover:text-white ${currentPath === '/services/project-management' ? 'active text-white' : ''}`}>
              Project Management
            </Link>

            <div className="group relative py-8">
              <a
                href="/#services"
                className={`nav-link flex items-center gap-1.5 text-sm font-semibold tracking-widest uppercase text-white/90 hover:text-white transition-colors duration-200 ${
                  isServiceMenuActive ? 'active text-white' : ''
                }`}
                aria-haspopup="true"
              >
                Services
                <svg className="transition-transform duration-200 group-hover:rotate-180" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                </svg>
              </a>
              <div className="invisible absolute left-1/2 top-[78px] w-72 -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-[#0f2e1a] p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {serviceMenuItems.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={`block rounded-lg px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white ${
                      currentPath === `/services/${service.id}` ? 'bg-white/10 text-white' : ''
                    }`}
                  >
                    {service.shortName}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`nav-link text-sm font-semibold tracking-widest uppercase text-white/90 hover:text-white ${currentPath === '/contact' ? 'active text-white' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+61400000000"
              className="hidden lg:flex items-center gap-2 btn-primary text-sm px-5 py-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Us
            </a>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 bg-[#0f2e1a] ${
          menuOpen ? 'max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          <Link to="/" className="py-3 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-white border-b border-white/5 transition-colors">
            Home
          </Link>
          <Link
            to="/services/new-home-construction"
            className="border-b border-white/5 py-3 text-sm font-semibold tracking-widest uppercase text-white/80 transition-colors hover:text-white"
          >
            New Homes
          </Link>
          <Link
            to="/services/project-management"
            className="border-b border-white/5 py-3 text-sm font-semibold tracking-widest uppercase text-white/80 transition-colors hover:text-white"
          >
            Project Management
          </Link>
          <a href="/#services" className="pt-4 pb-2 text-xs font-bold tracking-[0.2em] uppercase text-[#e67e22]">
            Services
          </a>
          {serviceMenuItems.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="border-b border-white/5 py-2.5 pl-4 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              {service.shortName}
            </Link>
          ))}
          {navLinks.slice(1).map((link) => (
            <Link key={link.to} to={link.to} className="py-3 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-white border-b border-white/5 transition-colors">
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+61481003030"
            className="mt-4 btn-primary text-sm text-center justify-center"
          >
            Call Us Now
          </a>
        </nav>
      </div>
    </header>
  )
}
