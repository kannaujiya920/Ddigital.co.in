import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { slides } from '../data/slides'
import Icon from './Icon'

const AUTOPLAY_MS = 5000

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)

  const goTo = useCallback((i) => {
    setIndex(((i % slides.length) + slides.length) % slides.length)
  }, [])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused])

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const delta = e.changedTouches[0].clientX - touchX.current
    if (delta > 50) prev()
    else if (delta < -50) next()
    touchX.current = null
  }

  return (
    <section
      className="relative overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Featured deals"
    >
      <div className="relative h-[420px] sm:h-[460px] lg:h-[520px]">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out bg-gradient-to-br ${s.from} ${s.via} ${s.to} ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={i !== index}
          >
            {/* decorative blobs */}
            <div className="absolute -top-24 -right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-black/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '26px 26px',
              }}
            />

            <div className="relative h-full mx-auto max-w-7xl px-14 sm:px-16 lg:px-4 flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full">
                <div
                  className={`transition-all duration-700 delay-100 ${
                    i === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3.5 py-1.5 text-xs font-bold text-white ring-1 ring-white/25">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {s.eyebrow}
                  </span>
                  <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight text-balance">
                    {s.title}
                  </h1>
                  <p className="mt-4 text-sm sm:text-base text-white/85 max-w-md">{s.subtitle}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      to={s.ctaLink}
                      className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 font-bold text-sm px-6 h-12 shadow-xl shadow-black/20 hover:bg-amber-300 active:scale-95 transition"
                    >
                      {s.ctaText}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="tel:18001117570"
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur text-white font-bold text-sm px-6 h-12 ring-1 ring-white/30 hover:bg-white/20 transition"
                    >
                      Call 1800 1117 570
                    </a>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center relative">
                  <div className="relative grid place-items-center w-72 h-72 xl:w-80 xl:h-80">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-white/10 backdrop-blur-sm ring-1 ring-white/20 rotate-6" />
                    <div className="absolute inset-0 rounded-[2.5rem] bg-white/10 ring-1 ring-white/20 -rotate-6" />
                    <div className="relative grid place-items-center w-56 h-56 xl:w-64 xl:h-64 rounded-full bg-white/95 shadow-2xl">
                      <Icon name={s.icon} className="w-24 h-24 xl:w-28 xl:h-28 text-slate-900" strokeWidth={1.3} />
                    </div>
                    <div className="absolute -top-3 -left-4 rounded-2xl bg-amber-400 text-slate-900 font-extrabold text-sm px-4 py-2 shadow-lg rotate-[-6deg]">
                      {s.badge}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute z-20 left-2 sm:left-4 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur text-white ring-1 ring-white/30 hover:bg-white/30 active:scale-90 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute z-20 right-2 sm:right-4 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur text-white ring-1 ring-white/30 hover:bg-white/30 active:scale-90 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* dots + progress */}
      <div className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1.5 rounded-full bg-white/30 overflow-hidden transition-all duration-300"
            style={{ width: i === index ? 34 : 8 }}
          >
            {i === index && (
              <span
                key={paused ? 'paused' : index}
                className="absolute inset-y-0 left-0 bg-white rounded-full"
                style={{
                  animation: paused ? 'none' : `hero-progress ${AUTOPLAY_MS}ms linear forwards`,
                  width: paused ? '100%' : undefined,
                }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes hero-progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </section>
  )
}
