import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone, Search, MapPin, Clock } from 'lucide-react'
import { categories } from '../data/categories'
import Icon from './Icon'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/repairs', label: 'Repairs' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50 shadow-md shadow-black/5">
      {/* Top strip */}
      <div className="hidden sm:block bg-slate-900 text-slate-300 text-xs">
        <div className="mx-auto max-w-7xl px-4 h-9 flex items-center justify-between gap-4 overflow-hidden">
          <div className="flex items-center gap-5 min-w-0">
            <span className="flex items-center gap-1.5 whitespace-nowrap"><MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" /> 15+ Stores Across Andhra Pradesh &amp; Karnataka</span>
            <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap"><Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Mon–Sun: 10:00 AM – 9:00 PM</span>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <span className="hidden md:inline whitespace-nowrap">28 Years of Trust</span>
            <a href="tel:18001117570" className="flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 shrink-0" /> Toll Free 1800 1117 570
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 h-16 sm:h-18 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-black text-xl">D</span>
            <span className="leading-tight">
              <span className="block font-extrabold text-lg text-slate-900 tracking-tight">D Digital</span>
              <span className="block text-[11px] font-medium text-slate-500 -mt-0.5">Sales &amp; Service Center</span>
            </span>
          </Link>

          {/* Search - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="flex w-full items-center rounded-full border border-slate-200 bg-slate-50 px-4 h-11 focus-within:ring-2 focus-within:ring-orange-500/40 focus-within:border-orange-500">
              <Search className="w-4.5 h-4.5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search for laptops, mobiles, AC service..."
                className="bg-transparent outline-none px-3 text-sm w-full text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive ? 'text-orange-600 bg-orange-50' : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex ml-2 items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-5 h-11 shadow-lg shadow-orange-600/25 hover:brightness-105 active:scale-95 transition"
          >
            Book a Repair
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden ml-auto grid place-items-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>

        {/* Category bar - desktop */}
        <div className="hidden lg:block border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 flex items-center gap-1 h-11 overflow-x-auto">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={c.slug === 'repairs' ? '/repairs' : `/products?category=${c.slug}`}
                className="flex items-center gap-1.5 px-3 h-8 rounded-full text-xs font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50 whitespace-nowrap transition-colors"
              >
                <Icon name={c.icon} className="w-4 h-4" />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white overflow-y-auto">
          <div className="p-4 flex flex-col gap-1">
            <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 h-11 mb-2">
              <Search className="w-4.5 h-4.5 text-slate-400" />
              <input type="text" placeholder="Search products..." className="bg-transparent outline-none px-3 text-sm w-full" />
            </div>
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-bold ${isActive ? 'text-orange-600 bg-orange-50' : 'text-slate-800'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Shop by Category</p>
            <div className="grid grid-cols-2 gap-2 px-2">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to={c.slug === 'repairs' ? '/repairs' : `/products?category=${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-sm font-semibold text-slate-700"
                >
                  <Icon name={c.icon} className="w-4.5 h-4.5 text-orange-600" />
                  {c.name}
                </Link>
              ))}
            </div>
            <a href="tel:18001117570" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold h-12">
              <Phone className="w-4.5 h-4.5" /> Toll Free 1800 1117 570
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
