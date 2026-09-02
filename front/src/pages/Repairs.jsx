import { useState } from 'react'
import {
  Laptop, Smartphone, Tv, Snowflake, Refrigerator, WashingMachine, Monitor, Camera,
  PhoneCall, ClipboardCheck, Wrench, PackageCheck, CheckCircle2, ChevronDown,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'

const SERVICES = [
  { icon: Laptop, name: 'Laptop Repair', desc: 'Screen, keyboard, battery, motherboard & software issues', price: '₹499', time: '60 min' },
  { icon: Smartphone, name: 'Mobile Repair', desc: 'Screen replacement, battery, charging port, water damage', price: '₹399', time: '45 min' },
  { icon: Tv, name: 'TV Repair', desc: 'Panel, backlight, no power, sound & smart TV issues', price: '₹599', time: 'Same day' },
  { icon: Snowflake, name: 'AC Service & Repair', desc: 'Gas refill, deep cleaning, compressor, cooling issues', price: '₹499', time: 'Same day' },
  { icon: Refrigerator, name: 'Fridge Repair', desc: 'Cooling problems, compressor, gas leak, gasket', price: '₹499', time: 'Same day' },
  { icon: WashingMachine, name: 'Washing Machine Repair', desc: 'Motor, drum, drainage, spin & control panel issues', price: '₹499', time: 'Same day' },
  { icon: Monitor, name: 'Desktop / PC Repair', desc: 'Hardware upgrade, virus removal, OS installation', price: '₹399', time: '60 min' },
  { icon: Camera, name: 'CCTV Install & Repair', desc: 'Camera setup, DVR/NVR issues, cabling & configuration', price: '₹499', time: 'Same day' },
]

const STEPS = [
  { icon: PhoneCall, title: 'Book a Slot', desc: 'Call, WhatsApp or fill the form below with your issue.' },
  { icon: ClipboardCheck, title: 'Free Diagnosis', desc: 'Our technician inspects the device and shares a clear quote.' },
  { icon: Wrench, title: 'Expert Repair', desc: 'Certified technicians fix it using genuine parts.' },
  { icon: PackageCheck, title: 'Delivered & Tested', desc: 'Get your device back, fully tested with warranty.' },
]

const FAQS = [
  { q: 'Do you provide free diagnosis?', a: 'Yes, diagnosis is completely free for all devices. You only pay if you approve the repair quote.' },
  { q: 'What warranty do you offer on repairs?', a: 'All repairs come with a 3 to 6 month warranty on parts and labour, depending on the component replaced.' },
  { q: 'Do you offer doorstep pickup?', a: 'Yes, we offer free doorstep pickup & drop for large appliances like AC, fridge, washing machine and TV across our Andhra Pradesh & Karnataka stores.' },
  { q: 'How long does a typical repair take?', a: 'Most mobile & laptop repairs are completed within 45–60 minutes. Appliance repairs are usually same-day.' },
]

const DEVICE_OPTIONS = SERVICES.map((s) => s.name)

export default function Repairs() {
  const [form, setForm] = useState({ name: '', phone: '', device: DEVICE_OPTIONS[0], issue: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Repair Studio"
        title="Fast, Reliable Device Repairs"
        subtitle="From cracked screens to appliance breakdowns — genuine parts, certified technicians, honest pricing."
      />

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div key={s.name} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-orange-50 text-orange-600 mb-4">
                <s.icon className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-slate-900">{s.name}</h3>
              <p className="mt-1.5 text-sm text-slate-500 leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                <span className="font-extrabold text-slate-900">Starts {s.price}</span>
                <span className="text-emerald-600 font-semibold">{s.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-orange-600 mb-2">How It Works</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Four Simple Steps to a Fixed Device</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-white shadow-md text-orange-600 mb-4">
                  <s.icon className="w-7 h-7" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-9 -translate-y-2 grid place-items-center w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold">
                  {i + 1}
                </span>
                <h3 className="font-bold text-slate-900 text-sm">{s.title}</h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed px-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form + FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-orange-600 mb-2">Book a Repair</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Tell Us What's Wrong</h2>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold text-emerald-800">Request received!</p>
                <p className="text-sm text-emerald-700 mt-1">
                  Thanks {form.name || 'there'} — our team will call you on {form.phone || 'your number'} within 30 minutes to confirm your slot.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-600 mb-1.5">Full Name</label>
                  <input
                    id="name" name="name" required value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full h-11 rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-600 mb-1.5">Phone Number</label>
                  <input
                    id="phone" name="phone" required type="tel" value={form.phone} onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full h-11 rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="device" className="block text-xs font-bold text-slate-600 mb-1.5">Device / Service</label>
                <select
                  id="device" name="device" value={form.device} onChange={handleChange}
                  className="w-full h-11 rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 bg-white"
                >
                  {DEVICE_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="issue" className="block text-xs font-bold text-slate-600 mb-1.5">Describe the Issue</label>
                <textarea
                  id="issue" name="issue" rows={3} value={form.issue} onChange={handleChange}
                  placeholder="e.g. Phone screen cracked, not turning on..."
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold h-12 shadow-lg shadow-orange-600/25 hover:brightness-105 active:scale-[0.99] transition"
              >
                Request Free Pickup / Diagnosis
              </button>
              <p className="text-xs text-center text-slate-400">Or call us directly at <a href="tel:18001117570" className="font-semibold text-orange-600">Toll Free 1800 1117 570</a></p>
            </form>
          )}
        </div>

        <div>
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-orange-600 mb-2">FAQs</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Common Questions</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-sm text-slate-900">
                  {f.q}
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
