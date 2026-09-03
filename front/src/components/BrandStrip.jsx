const BRANDS = [
  { name: 'Dell', color: '#007DB8' },
  { name: 'HP', color: '#0096D6' },
  { name: 'Lenovo', color: '#E2231A' },
  { name: 'Samsung', color: '#1428A0' },
  { name: 'Apple', color: '#555555' },
  { name: 'LG', color: '#A50034' },
  { name: 'Sony', color: '#000000' },
  { name: 'Mi', color: '#FF6900' },
  { name: 'Voltas', color: '#0072BC' },
  { name: 'Whirlpool', color: '#00AEEF' },
  { name: 'Asus', color: '#0060AF' },
  { name: 'Acer', color: '#83B81A' },
]

export default function BrandStrip() {
  return (
    <section className="group border-y border-slate-100 bg-white py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
          Authorized Sales &amp; Service Partner For
        </p>
      </div>

      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex w-max animate-brand-marquee group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-12 pr-12" aria-hidden={copy === 1}>
              {BRANDS.map((b) => (
                <span
                  key={`${copy}-${b.name}`}
                  style={{ color: b.color }}
                  className="text-lg sm:text-xl font-black tracking-tight whitespace-nowrap opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
                >
                  {b.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brand-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-brand-marquee {
          animation: brand-marquee 24s linear infinite;
        }
      `}</style>
    </section>
  )
}
