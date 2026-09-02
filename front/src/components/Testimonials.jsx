import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
      <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" subtitle="Real reviews from real customers across Andhra Pradesh & Karnataka." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <Quote className="w-6 h-6 text-orange-200 mb-2" />
            <div className="flex items-center gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
              ))}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed flex-1">{t.text}</p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-400">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
