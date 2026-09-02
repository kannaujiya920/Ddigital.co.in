import HeroSlider from '../components/HeroSlider'
import CategoryStrip from '../components/CategoryStrip'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import BrandStrip from '../components/BrandStrip'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import { products } from '../data/products'

const FEATURED_IDS = ['lap-2', 'mob-2', 'tv-1', 'ac-1', 'acc-1', 'frg-2', 'cctv-1', 'wm-1']
const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean)

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CategoryStrip />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <SectionHeading
          eyebrow="Deals of the Day"
          title="Trending Products"
          subtitle="Hand-picked deals across laptops, mobiles, TVs, appliances & more."
          linkTo="/products"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <BrandStrip />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}
