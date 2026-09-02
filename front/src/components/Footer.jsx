import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ShieldCheck, Truck, BadgeCheck } from 'lucide-react'
import { categories } from '../data/categories'
import SocialIcon from './SocialIcon'

const TRUST = [
  { icon: ShieldCheck, title: 'Genuine Parts', desc: 'OEM & warranty backed' },
  { icon: Truck, title: 'Doorstep Pickup', desc: 'Free in select areas' },
  { icon: BadgeCheck, title: '28 Years of Trust', desc: '15+ stores, certified technicians' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Trust strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST.map((t) => (
            <div key={t.title} className="flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                <t.icon className="w-5.5 h-5.5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">{t.title}</p>
                <p className="text-xs text-slate-400">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 text-white font-black">D</span>
            <span className="font-extrabold text-lg text-white">D Digital</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm mb-4">
            Your neighbourhood destination for laptops, mobiles, home appliances &amp; expert repairs —
            genuine products, fair prices, and technicians you can trust.
          </p>
          <div className="flex items-center gap-2">
            {['facebook', 'instagram', 'x', 'youtube', 'whatsapp'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid place-items-center w-9 h-9 rounded-full bg-white/5 hover:bg-orange-600 hover:text-white transition-colors"
              >
                <SocialIcon name={s} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white font-bold text-sm mb-4">Shop</p>
          <ul className="space-y-2.5 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to={c.slug === 'repairs' ? '/repairs' : `/products?category=${c.slug}`} className="hover:text-orange-500 transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-bold text-sm mb-4">Company</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-orange-500 transition-colors">All Products</Link></li>
            <li><Link to="/repairs" className="hover:text-orange-500 transition-colors">Repair Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-500" /> 15+ Stores across Andhra Pradesh &amp; Karnataka</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-orange-500" /> Toll Free 1800 1117 570</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-orange-500" /> support@ddigital.in</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-orange-500" /> Open Daily 10 AM – 9 PM</span>
          </div>
          <p>© {new Date().getFullYear()} D Digital · 28 Years of Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
