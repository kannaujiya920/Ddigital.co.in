import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function CategoryStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
      <SectionHeading eyebrow="Browse" title="Shop by Category" subtitle="Everything for your home & work — sales and expert repairs, all under one roof." />
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((c, i) => (
          <Link
            key={c.slug}
            to={c.slug === 'repairs' ? '/repairs' : `/products?category=${c.slug}`}
            className="group relative flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all duration-300"
            style={{ transitionDelay: `${i * 20}ms` }}
          >
            <span className="grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <Icon name={c.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800">{c.name}</span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-600">{c.tag}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
