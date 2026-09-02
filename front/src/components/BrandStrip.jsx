const BRANDS = ['Dell', 'HP', 'Lenovo', 'Samsung', 'Apple', 'LG', 'Sony', 'Mi', 'Voltas', 'Whirlpool', 'Asus', 'Acer']

export default function BrandStrip() {
  return (
    <section className="border-y border-slate-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
          Authorized Sales &amp; Service Partner For
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map((b) => (
            <span key={b} className="text-lg sm:text-xl font-black text-slate-300 hover:text-slate-500 transition-colors tracking-tight">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
