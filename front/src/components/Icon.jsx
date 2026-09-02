import {
  Laptop, Smartphone, Monitor, Tablet, Camera, Snowflake, Tv,
  Refrigerator, WashingMachine, Headphones, Wrench,
} from 'lucide-react'

const ICONS = {
  Laptop, Smartphone, Monitor, Tablet, Camera, Snowflake, Tv,
  Refrigerator, WashingMachine, Headphones, Wrench,
}

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.8 }) {
  const Cmp = ICONS[name] ?? Laptop
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
