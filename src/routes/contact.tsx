import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import serviceData from '@/data/services'
import { pageSeo } from '@/lib/seo'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  validateSearch: (search: Record<string, unknown>): { service?: string } => ({
    service: typeof search.service === 'string' && serviceData.some((item) => item.id === search.service) ? search.service : undefined,
  }),
  head: () => pageSeo({ title: 'Request a Construction Quote in NSW | DryStone', description: 'Tell DryStone about your NSW building project. Enquire about residential construction, project management or specialist trade installation. Call 0481 003 030.', path: '/contact' }),
})

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function ContactPage() {
  const search = Route.useSearch()
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceData.find((item) => item.id === search.service)?.name ?? '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const services = [
    ...serviceData.map((service) => service.name),
    'Multiple Services',
    'General Enquiry',
  ]

  function validate() {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim() && !form.email.trim())
      newErrors.contact = 'Please provide a phone number or email'
    if (!form.service) newErrors.service = 'Please select a service'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (formState === 'error') setFormState('idle')
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    const values = new FormData(e.currentTarget as HTMLFormElement)
    values.set('source-page', window.location.pathname)
    const params = new URLSearchParams(window.location.search)
    for (const key of ['source', 'medium', 'campaign']) values.set(`utm-${key}`, params.get(`utm_${key}`) ?? '')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(values.entries()).map(([key, value]) => [key, String(value)])).toString(),
      })
      if (!response.ok) throw new Error('Submission not accepted')
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  return (
    <div className="contact-page premium-page">
      {/* Hero */}
      <section
        className="contact-hero relative overflow-hidden"
        style={{
          background: 'var(--forest-dark)',
        }}
      >
        <div className="page-width">
          <span className="section-label">Get in touch</span>
          <h1
            className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight"
          >
            Let’s discuss
            <br />
            <em>your project.</em>
          </h1>
          <p className="mt-4 text-white/80 max-w-md leading-relaxed">
            Tell us about your project and we'll get back to you with a clear,
            no-obligation quote — usually within 24 hours.
          </p>
        </div>
        <img className="contact-hero-image" src="/images/new-home-interior.jpeg" alt="Thoughtfully finished residential interior" />
      </section>

      {/* Main */}
      <section className="contact-main section-space" style={{ background: '#f5f2ed' }}>
        <div className="page-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* Contact details */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <span className="section-label">Direct contact</span>
                <h2
                  className="mt-3 text-2xl lg:text-3xl font-black text-[#0f2e1a]"
                >
                  Speak with our team
                </h2>
                <div className="w-10 h-1 bg-[#e67e22] mt-4" />
              </div>

              <div className="space-y-5">
                {[
                  {
                    label: 'Phone',
                    value: '+61 481 00 3030',
                    href: 'tel:+61481003030',
                    iconPath: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
                  },
                  {
                    label: 'Email',
                    value: 'info@drystone.com.au',
                    href: 'mailto:info@drystone.com.au',
                    iconPath: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: '#1a4d2e' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#e67e22]">
                        <path d={item.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-normal text-[#8a8880] mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-[#1a4d2e] font-medium hover:text-[#e67e22] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-[#4a4a46]">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {formState === 'success' ? (
                <SuccessMessage />
              ) : (
                <form
                  name="project-enquiry"
                  method="POST"
                  action="/__forms.html"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="enquiry-form bg-white p-8 lg:p-10"
                >
                  <input type="hidden" name="form-name" value="project-enquiry" />
                  <input type="hidden" name="source-page" value="/contact" />
                  <input type="hidden" name="utm-source" value="" />
                  <input type="hidden" name="utm-medium" value="" />
                  <input type="hidden" name="utm-campaign" value="" />
                  <p hidden><label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
                  <h2
                    className="text-2xl font-black text-[#0f2e1a] mb-6"
                  >
                    Your project details
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <FormField
                      label="Full name"
                      required
                      error={errors.name}
                    >
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                      />
                    </FormField>

                    <FormField label="Phone number" error={errors.contact}>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="04XX XXX XXX"
                        className="form-input"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <FormField label="Email address">
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="form-input"
                      />
                    </FormField>

                    <FormField label="Service required" required error={errors.service}>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`form-input ${errors.service ? 'border-red-400' : ''}`}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <FormField label="Project details" required error={errors.message}>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project — location, size, timeline, any specific requirements…"
                      className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                    />
                  </FormField>

                  {errors.contact && (
                    <p className="text-red-500 text-xs mt-1 mb-4">{errors.contact}</p>
                  )}

                  {formState === 'error' && <p role="alert" className="form-error">We couldn’t send your enquiry. Your details are still here; please try again, or call <a href="tel:+61481003030">0481 003 030</a>.</p>}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary w-full justify-center mt-6 text-base py-4 disabled:opacity-60"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#8a8880] mt-4 text-center">
                    Your details are used to respond to your project enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold tracking-normal text-[#4a4a46]">
        {label}
        {required && <span className="text-[#e67e22] ml-1">*</span>}
      </span>
      {children}
      {error && <span role="alert" className="text-red-500 text-xs">{error}</span>}
    </label>
  )
}

function SuccessMessage() {
  return (
    <div role="status" className="bg-white rounded-2xl p-10 shadow-sm flex flex-col items-center text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
        style={{ background: '#1a4d2e' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </div>
      <h2
        className="text-3xl font-black text-[#0f2e1a] mb-3"
      >
        Enquiry sent
      </h2>
      <p className="text-[#5a5a56] max-w-sm leading-relaxed text-sm">
        Thanks for reaching out. The DryStone team will review your project
        details and be in touch. For anything urgent, call 0481 003 030.
      </p>
    </div>
  )
}
