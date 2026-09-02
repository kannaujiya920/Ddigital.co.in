import { ShieldCheck, Truck, BadgeCheck, Clock, Wrench, ThumbsUp } from 'lucide-react'
import SectionHeading from './SectionHeading'

const POINTS = [
  { icon: ShieldCheck, title: '100% Genuine Products', desc: 'Authorized dealer for all major brands with full manufacturer warranty.' },
  { icon: Wrench, title: 'Expert Repair Technicians', desc: '28 years of experience fixing laptops, mobiles, TVs & appliances.' },
  { icon: Clock, title: 'Same-Day Service', desc: 'Most repairs completed within 24–60 minutes at our service center.' },
  { icon: Truck, title: 'Free Doorstep Delivery', desc: 'Fast delivery & installation across Andhra Pradesh & Karnataka.' },
  { icon: BadgeCheck, title: 'Best Price Guarantee', desc: 'Transparent pricing with no hidden charges, ever.' },
  { icon: ThumbsUp, title: '15+ Stores, 2 States', desc: 'Trusted by families and businesses across Andhra Pradesh & Karnataka.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Why D Digital" title="Built on Trust, Backed by Experts" subtitle="From buying your next device to fixing your old one — we've got you covered end to end." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow">
              <span className="grid place-items-center w-12 h-12 shrink-0 rounded-xl bg-orange-50 text-orange-600">
                <p.icon className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
