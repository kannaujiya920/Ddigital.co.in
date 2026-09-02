import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import Icon from '../components/Icon'
import { categories } from '../data/categories'
import { getProductsByCategory } from '../data/products'

const FILTERS = [{ name: 'All', slug: 'all', icon: null }, ...categories.filter((c) => c.slug !== 'repairs')]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('category') || 'all'

  const list = useMemo(() => getProductsByCategory(active), [active])
  const activeLabel = FILTERS.find((f) => f.slug === active)?.name ?? 'All'

  const setActive = (slug) => {
    if (slug === 'all') setSearchParams({})
    else setSearchParams({ category: slug })
  }

  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Shop All Products"
        subtitle="Genuine, warranty-backed electronics for your home and work — at prices that make sense."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-slate-500">
          <SlidersHorizontal className="w-4 h-4" /> Filter by category
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => setActive(f.slug)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 h-9 text-sm font-semibold border transition-colors ${
                active === f.slug
                  ? 'bg-orange-600 border-orange-600 text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-600'
              }`}
            >
              {f.icon && <Icon name={f.icon} className="w-4 h-4" />}
              {f.name}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            Showing <span className="font-bold text-slate-800">{list.length}</span> results in{' '}
            <span className="font-bold text-slate-800">{activeLabel}</span>
          </p>
        </div>

        {list.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">No products found in this category yet.</div>
        )}
      </section>
    </>
  )
}
