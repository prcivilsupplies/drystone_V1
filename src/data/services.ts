export interface Service {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  image: string
  galleryImages: string[]
  color: string
}

const services: Service[] = [
  {
    id: 'aluminium-windows',
    name: 'Aluminium Windows Supply & Install',
    shortName: 'Aluminium Windows',
    tagline: 'Precision-engineered frames for every build',
    description:
      'Premium aluminium window systems supplied and professionally installed for residential and commercial projects.',
    longDescription:
      'DryStone supplies and installs a full range of aluminium window systems — from slimline casement frames to large-format sliding and bi-fold configurations. We work directly with leading manufacturers to bring you durable, thermally broken profiles that meet Australian energy standards. Every install is measured, flashed, and finished to trade standard.',
    features: [
      'Custom sizing for new builds and renovations',
      'Thermally broken profiles for energy efficiency',
      'Sliding, casement, awning & bi-fold configurations',
      'Powder-coat colour matching available',
      'Full supply-and-install service',
      'Commercial & residential projects',
    ],
    image: '/images/windows.png',
    galleryImages: ['/images/windows.png', '/images/windows1.png'],
    color: '#1a4d2e',
  },
  {
    id: 'flooring',
    name: 'Hebel / AAC / Concrete Flooring',
    shortName: 'Concrete Flooring',
    tagline: 'Structural performance underfoot',
    description:
      'Hebel, AAC panel and XCEM concrete flooring systems installed with precision for long-lasting, thermally efficient floors.',
    longDescription:
      'Our flooring division specialises in Hebel PowerFloor, AAC panel systems, and XCEM concrete solutions. These systems offer outstanding structural performance combined with thermal mass properties that reduce heating and cooling loads. Whether you\'re building ground-up or extending an existing slab, our team delivers a flat, level, code-compliant floor system every time.',
    features: [
      'Hebel PowerFloor AAC panel systems',
      'XCEM & polished concrete finishes',
      'Excellent thermal mass & acoustic insulation',
      'Suitable for upper-storey and ground-floor applications',
      'Fire-resistant construction',
      'Rapid installation timelines',
    ],
    image: '/images/flooring.jpeg',
    galleryImages: ['/images/flooring.jpeg'],
    color: '#2a6b41',
  },
  {
    id: 'wall-cladding',
    name: 'Hebel / AAC / Concrete Wall Cladding',
    shortName: 'Wall Cladding',
    tagline: 'Durable cladding with striking character',
    description:
      'Hebel, AAC and Bison concrete wall cladding panels that deliver thermal performance, fire resistance and a bold architectural finish.',
    longDescription:
      'DryStone installs Hebel PowerPanel, AAC block and Bison precast cladding systems for exterior and interior walls. These lightweight yet structurally robust panels are non-combustible, dimensionally stable and provide exceptional insulation. The result is a wall system that performs for decades and takes any render, texture or paint finish beautifully.',
    features: [
      'Hebel PowerPanel & AAC block systems',
      'Bison precast concrete panels',
      'Non-combustible — BAL rated options available',
      'Precision-cut for clean reveals and joints',
      'Suitable for render, paint or textured finishes',
      'Residential & commercial facades',
    ],
    image: '/images/wallcladding.jpg',
    galleryImages: ['/images/wallcladding.jpg', '/images/wallcladding1.jpg'],
    color: '#0f2e1a',
  },
  {
    id: 'rendering',
    name: 'Professional Rendering',
    shortName: 'Rendering',
    tagline: 'Flawless finishes that stand the test of time',
    description:
      'Expert rendering services for new construction, renovation and heritage projects — acrylic, sand-and-cement, and textured finishes.',
    longDescription:
      'Our rendering team delivers smooth, textured and decorative finishes for internal and external surfaces. We use premium render systems suited to the substrate — whether Hebel, brick, masonry or compressed sheet — and apply them with meticulous preparation and craftsmanship. From flat white acrylic render to deep-textured feature walls, the result is always clean, durable and architecturally considered.',
    features: [
      'Acrylic & polymer render systems',
      'Sand-and-cement & traditional lime render',
      'Textured and feature wall finishes',
      'Hebel-compatible render products',
      'Internal and external applications',
      'Heritage & remediation work',
    ],
    image: '/images/render.jpg',
    galleryImages: ['/images/render.jpg'],
    color: '#1a4d2e',
  },
]

export default services
