export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-orange-900 py-14 sm:py-18">
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '26px 26px' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        {eyebrow && (
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-amber-400 mb-3">{eyebrow}</span>
        )}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h1>
        {subtitle && <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
