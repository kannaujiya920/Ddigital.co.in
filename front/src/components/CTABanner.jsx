import { Link } from 'react-router-dom'
import { PhoneCall, Wrench } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-orange-900 px-6 sm:px-12 py-12 sm:py-14 text-center sm:text-left">
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -left-10 -bottom-16 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-amber-300 ring-1 ring-white/20">
              <Wrench className="w-3.5 h-3.5" /> Device not working?
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get it fixed today — expert technicians, honest pricing.
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-md">
              Free diagnostics on every device. Most repairs done same day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:18001117570"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 font-bold text-sm px-6 h-12 hover:bg-amber-300 active:scale-95 transition"
            >
              <PhoneCall className="w-4 h-4" /> Toll Free 1800 1117 570
            </a>
            <Link
              to="/repairs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 text-white font-bold text-sm px-6 h-12 hover:bg-orange-500 active:scale-95 transition"
            >
              Book a Repair
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
