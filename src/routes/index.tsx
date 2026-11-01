import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Check, Plus } from 'lucide-react'
import services from '@/data/services'

export const Route = createFileRoute('/')({ component: HomePage })

const slides = [
  { image: '/images/new-home-exterior.jpeg', eyebrow: 'Residential construction · NSW', title: 'Considered design.\nExceptional builds.', text: 'From the first plans to the final details. Bring your vision home with DryStone.', link: '/services/new-home-construction', label: 'Explore new homes', caption: 'Architectural & residential construction' },
  { image: '/images/new-home-interior.jpeg', eyebrow: 'Details that make the difference', title: 'Beautiful spaces.\nBuilt to last.', text: 'Windows, flooring, cladding and rendering. Specialist workmanship at every stage.', link: '/#services', label: 'Discover our services', caption: 'Specialist building systems & finishes' },
  { image: '/images/project-management-site.jpg', eyebrow: 'From planning to handover', title: 'Your vision.\nOur commitment.', text: 'Practical project management. Clear communication. One team bringing it all together.', link: '/services/project-management', label: 'Explore project management', caption: 'Construction project management' },
]

function HomePage() {
  const [active, setActive] = useState(0)
  const slide = slides[active]
  return (
    <div className="home-redesign">
      <section className="showcase" aria-label="Discover DryStone">
        {slides.map((item, i) => <img key={item.image} src={item.image} alt="" className={`showcase-image ${i === active ? 'is-active' : ''}`} fetchPriority={i === 0 ? 'high' : 'auto'} />)}
        <div className="showcase-shade" />
        <div className="showcase-content page-width" key={active}>
          <p className="eyebrow light">{slide.eyebrow}</p>
          <h1>{slide.title.split('\n').map((line, i) => <span key={line} className={i === 1 ? 'hero-second-line' : ''}>{line}</span>)}</h1>
          <p className="showcase-description">{slide.text}</p>
          <a href={slide.link} className="btn-primary">{slide.label}<ArrowUpRight size={18} /></a>
        </div>
        <div className="showcase-bottom page-width">
          <a className="scroll-note" href="#services">Explore DryStone <span>↓</span></a>
          <div className="slide-controls">
            <span className="slide-count">0{active + 1} <span>/ 03</span></span>
            <button aria-label="Previous featured service" onClick={() => setActive((active + 2) % 3)}><ChevronLeft size={18} /></button>
            <button aria-label="Next featured service" onClick={() => setActive((active + 1) % 3)}><ChevronRight size={18} /></button>
          </div>
        </div>
        <div className="slide-tabs" aria-label="Featured services">
          {slides.map((item, i) => <button key={item.caption} aria-pressed={i === active} onClick={() => setActive(i)}><span>0{i + 1}</span>{item.caption}<ArrowUpRight size={17} /></button>)}
        </div>
      </section>

      <div className="assurance-strip"><div className="page-width"><span>Built with care. Finished with pride.</span><span><Check size={15} /> Residential construction</span><span><Check size={15} /> Specialist trade services</span><span><Check size={15} /> Serving NSW</span></div></div>

      <section id="services" className="services-gallery page-width section-space">
        <div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Every detail.<br />Expertly delivered.</h2></div><div className="heading-aside"><p>Complete home construction and specialist building services. The right expertise for every part of your project.</p><a href="#service-collection" className="text-link">Explore our services <ArrowRight size={17} /></a></div></div>
        <div id="service-collection" className="service-collection">
          {[...services].sort((a, b) => (a.id === 'new-home-construction' ? -1 : b.id === 'new-home-construction' ? 1 : 0)).map((service, i) => (
            <Link to="/services/$serviceId" params={{ serviceId: service.id }} key={service.id} className={`collection-card ${i === 0 ? 'collection-featured' : ''}`}>
              <div className="collection-image"><img src={service.id === 'project-management' ? '/images/project-management-site.jpg' : service.image} alt={service.shortName} loading="lazy" /><span className="collection-number">0{i + 1}</span><span className="collection-open"><ArrowUpRight size={23} /></span>{i === 0 && <span className="collection-tag">From concept to completion</span>}</div>
              <div className="collection-caption"><div><h3>{service.shortName}</h3><p>{service.tagline}</p></div><ArrowUpRight size={20} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-section"><div className="page-width story-grid"><div className="story-image"><img src="/images/new-home-interior.jpeg" alt="Light-filled residential interior with carefully finished architectural details" loading="lazy" /><div className="image-label"><span>THE DRYSTONE APPROACH</span><ArrowUpRight size={20} /></div></div><div className="story-copy"><p className="eyebrow">Built around you</p><h2>A great build starts<br />with the right people.</h2><p>We bring practical site experience and a considered approach to every project. From custom residential homes to specialist trade packages, we focus on the details that make a lasting difference.</p><p>Working closely with homeowners, builders and design teams across NSW, we coordinate the people, materials and craftsmanship that turn your plans into a place to call home.</p><div className="story-values"><span><Plus size={16} /> Clear communication</span><span><Plus size={16} /> Quality workmanship</span><span><Plus size={16} /> Hands-on coordination</span></div><Link to="/contact" className="text-link">Meet your building partner <ArrowRight size={18} /></Link></div></div></section>

      <section className="featured-build page-width section-space"><div className="section-heading"><div><p className="eyebrow">Spaces to call home</p><h2>From vision to reality.</h2></div><Link to="/services/$serviceId" params={{ serviceId: "new-home-construction" }} className="text-link">Explore residential construction <ArrowRight size={17} /></Link></div><Link to="/services/$serviceId" params={{ serviceId: "new-home-construction" }} className="project-banner"><img src="/images/new-home-exterior.jpeg" alt="Contemporary DryStone residential home exterior" loading="lazy" /><div className="project-banner-copy"><div><p className="eyebrow light">Residential construction</p><h3>Thoughtfully built.<br />Beautifully finished.</h3></div><span className="project-circle"><ArrowUpRight size={28} /></span></div></Link></section>

      <section className="process-section"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">A clear path forward</p><h2>Your project, made simpler.</h2></div><p className="process-intro">One team. Clear communication.<br />Support at every stage of your build.</p></div><div className="process-grid">{[
        ['01', 'Let’s talk', 'Tell us about your plans, priorities and the services you need.'],
        ['02', 'Plan with confidence', 'We review the scope and provide a clear, itemised quote.'],
        ['03', 'Build with care', 'Our team coordinates the work and keeps you informed along the way.'],
        ['04', 'Enjoy the result', 'Careful finishing and a considered handover bring it all together.'],
      ].map(([number, title, text]) => <div key={number} className="process-step"><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="enquiry-section page-width"><p className="eyebrow">Let’s build something lasting</p><div><h2>Your next chapter<br />starts here.</h2><div><p>A new home, a fresh finish, or a project ready to take shape.<br />We’d love to hear what you have in mind.</p><Link to="/contact" className="btn-primary">Discuss your project <ArrowUpRight size={18} /></Link></div></div></section>
    </div>
  )
}
