import { Phone } from 'lucide-react'
import SocialIcon from './SocialIcon'

export default function FloatingButtons() {
  return (
    <div className="fixed z-40 bottom-5 right-5 flex flex-col gap-3">
      <a
        href="tel:18001117570"
        aria-label="Call us toll free"
        className="grid place-items-center w-[52px] h-[52px] rounded-full bg-slate-900 text-white shadow-xl hover:scale-105 active:scale-95 transition"
      >
        <Phone className="w-5.5 h-5.5" />
      </a>
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid place-items-center w-[52px] h-[52px] rounded-full bg-emerald-500 text-white shadow-xl hover:scale-105 active:scale-95 transition animate-[pulse_2.5s_ease-in-out_infinite]"
      >
        <SocialIcon name="whatsapp" className="w-6 h-6" />
      </a>
    </div>
  )
}
