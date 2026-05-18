import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title:
          'DryStone Construction | Aluminium Windows, Concrete Flooring & Cladding',
      },
      {
        name: 'description',
        content:
          'Premium Aluminium Windows, XCEM/HEBEL/AAC Concrete Flooring, XCEM/HEBEL/AAC Wall Cladding & Professional Rendering. Supply & Installation by DryStone.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
