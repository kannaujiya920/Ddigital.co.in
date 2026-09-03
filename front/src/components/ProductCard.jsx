import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Heart, MessageCircle } from 'lucide-react'
import Icon from './Icon'

export default function ProductCard({ product }) {
  const [saved, setSaved] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)
  const showImage = product.image && !imgFailed

  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-40 sm:h-44 bg-gradient-to-br from-slate-50 to-orange-50 grid place-items-center overflow-hidden">
        {showImage ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <Icon name={product.icon} className="w-16 h-16 sm:w-20 sm:h-20 text-slate-300 group-hover:text-orange-300 group-hover:scale-110 transition-all duration-300" strokeWidth={1.2} />
        )}
        {discount > 0 && (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1">
            {discount}% OFF
          </span>
        )}
        {product.badge && (
          <span className="absolute top-2.5 right-2.5 rounded-full bg-slate-900/85 text-white text-[10px] font-bold px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          aria-label="Save to wishlist"
          aria-pressed={saved}
          className="absolute bottom-2.5 right-2.5 grid place-items-center w-8 h-8 rounded-full bg-white/90 shadow hover:bg-white transition"
        >
          <Heart className={`w-4 h-4 ${saved ? 'fill-rose-600 text-rose-600' : 'text-slate-500'}`} />
        </button>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <p className="text-[11px] font-bold text-orange-600 uppercase tracking-wide">{product.brand}</p>
        <h3 className="mt-1 text-sm font-bold text-slate-900 leading-snug line-clamp-2 min-h-[2.5rem]">{product.name}</h3>

        <div className="mt-2 flex items-center gap-1.5">
          <span className="flex items-center gap-0.5 rounded bg-emerald-600 text-white text-[11px] font-bold px-1.5 py-0.5">
            {product.rating} <Star className="w-3 h-3 fill-white" />
          </span>
          <span className="text-xs text-slate-400">({product.reviews})</span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-extrabold text-slate-900">₹{product.price.toLocaleString('en-IN')}</span>
          {product.mrp > product.price && (
            <span className="text-xs text-slate-400 line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
          )}
        </div>

        <Link
          to="/contact"
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 text-white text-sm font-bold h-10 hover:bg-orange-600 transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Enquire Now
        </Link>
      </div>
    </div>
  )
}
