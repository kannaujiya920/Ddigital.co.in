import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const INFO = [
  { icon: Phone, title: 'Call Us', lines: ['Toll Free: 1800 1117 570'] },
  { icon: Mail, title: 'Email Us', lines: ['support@ddigital.in', 'sales@ddigital.in'] },
  { icon: MapPin, title: 'Visit Us', lines: ['15+ Stores across', 'Andhra Pradesh & Karnataka'] },
  { icon: Clock, title: 'Working Hours', lines: ['Mon – Sun: 10:00 AM – 9:00 PM', 'Repairs open till 8:00 PM'] },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="We'd Love to Hear From You"
        subtitle="Questions about a product, order, or repair? Our team typically responds within an hour."
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {INFO.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-orange-50 text-orange-600 mb-4">
                <c.icon className="w-5.5 h-5.5" />
              </span>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="text-sm text-slate-500 leading-relaxed">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-orange-600 mb-2">Send a Message</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Drop Us a Line</h2>

            {sent ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold text-emerald-800">Message sent!</p>
                  <p className="text-sm text-emerald-700 mt-1">
                    Thanks {form.name || 'there'}, we've received your message and will get back to you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-bold text-slate-600 mb-1.5">Full Name</label>
                    <input
                      id="c-name" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full h-11 rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-xs font-bold text-slate-600 mb-1.5">Phone Number</label>
                    <input
                      id="c-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full h-11 rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs font-bold text-slate-600 mb-1.5">Email Address</label>
                  <input
                    id="c-email" name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full h-11 rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="c-message" className="block text-xs font-bold text-slate-600 mb-1.5">Message</label>
                  <textarea
                    id="c-message" name="message" rows={4} required value={form.message} onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold h-12 px-8 shadow-lg shadow-orange-600/25 hover:brightness-105 active:scale-[0.99] transition"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-orange-600 mb-2">Find Us</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Our Stores</h2>
            <div className="relative h-72 lg:h-[calc(100%-3.5rem)] rounded-2xl overflow-hidden border border-slate-100 bg-gradient-to-br from-slate-100 to-orange-50 grid place-items-center">
              <div
                className="absolute inset-0 opacity-40"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)', backgroundSize: '22px 22px' }}
              />
              <div className="relative flex flex-col items-center text-center px-6">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-orange-600 text-white shadow-lg mb-3">
                  <MapPin className="w-7 h-7" />
                </span>
                <p className="font-bold text-slate-800">15+ D Digital Stores</p>
                <p className="text-sm text-slate-500 mt-1 max-w-[220px]">Across Andhra Pradesh &amp; Karnataka — call our toll free number to find your nearest store.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
