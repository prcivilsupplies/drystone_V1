import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      {
        title: 'Contact DryStone Construction | Free Quote',
      },
    ],
  }),
})

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const services = [
    'Aluminium Windows Supply & Install',
    'Hebel / XCEM / AAC / Concrete Flooring',
    'Hebel / AAC / Concrete Wall Cladding',
    'Professional Rendering',
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
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200))
    setFormState('success')
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(15,46,26,0.95) 0%, rgba(26,77,46,0.9) 100%), url('/images/contact.png') center/cover no-repeat`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="section-label">Get in Touch</span>
          <h1
            className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Request a
            <br />
            <span style={{ color: 'var(--amber)' }}>Free Quote</span>
          </h1>
          <p className="mt-4 text-white/60 max-w-md leading-relaxed">
            Tell us about your project and we'll get back to you with a clear,
            no-obligation quote — usually within 24 hours.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#f5f2ed]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
      </section>

      {/* Main */}
      <section className="py-16 lg:py-24" style={{ background: '#f5f2ed' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* Contact details */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <span className="section-label">Direct Contact</span>
                <h2
                  className="mt-3 text-2xl lg:text-3xl font-black text-[#0f2e1a]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  We'd love to hear from you
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
                      <div className="text-xs font-semibold tracking-widest uppercase text-[#8a8880] mb-0.5">
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
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm"
                >
                  <h2
                    className="text-2xl font-black text-[#0f2e1a] mb-6"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Project Enquiry Form
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <FormField
                      label="Full Name"
                      required
                      error={errors.name}
                    >
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                      />
                    </FormField>

                    <FormField label="Phone Number" error={errors.contact}>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="04XX XXX XXX"
                        className="form-input"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <FormField label="Email Address">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </FormField>

                    <FormField label="Service Required" required error={errors.service}>
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

                  <FormField label="Project Details" required error={errors.message}>
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
                        Send Enquiry
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#8a8880] mt-4 text-center">
                    We'll get back to you within 24 hours. No spam, ever.
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
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold tracking-wider uppercase text-[#4a4a46]">
        {label}
        {required && <span className="text-[#e67e22] ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}

function SuccessMessage() {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-sm flex flex-col items-center text-center">
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
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Enquiry Sent!
      </h2>
      <p className="text-[#5a5a56] max-w-sm leading-relaxed text-sm">
        Thanks for reaching out. The DryStone team will review your project
        details and be in touch within 24 hours.
      </p>
    </div>
  )
}
