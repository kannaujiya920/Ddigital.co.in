import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionHeading({ eyebrow, title, subtitle, linkTo, linkText = 'View all' }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8">
      <div>
        {eyebrow && (
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-orange-600 mb-2">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
        {subtitle && <p className="mt-1.5 text-sm text-slate-500 max-w-xl">{subtitle}</p>}
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700"
        >
          {linkText} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  )
}
