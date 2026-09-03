import laptopImg from '../assets/laptop-cutout.png'
import mobileImg from '../assets/mobile.png'
import desktopImg from '../assets/desktop.avif'
import tabletImg from '../assets/tablets.jpg'
import cctvImg from '../assets/cctv.jpg'
import acImg from '../assets/ac1-cutout.png'
import tvImg from '../assets/tv.jpg'
import fridgeImg from '../assets/fridge.jpg'
import washingImg from '../assets/washing.avif'
import accessoryImg from '../assets/asserise.jpg'

export const categories = [
  { name: 'Laptops', slug: 'laptops', icon: 'Laptop', image: laptopImg, tag: 'Up to 40% Off' },
  { name: 'Mobiles', slug: 'mobiles', icon: 'Smartphone', image: mobileImg, tag: 'New Arrivals' },
  { name: 'Desktops', slug: 'desktops', icon: 'Monitor', image: desktopImg, tag: 'Custom Builds' },
  { name: 'Tablets', slug: 'tabs', icon: 'Tablet', image: tabletImg, tag: 'Best Sellers' },
  { name: 'CCTV', slug: 'cctv', icon: 'Camera', image: cctvImg, tag: 'Free Install' },
  { name: 'ACs', slug: 'acs', icon: 'Snowflake', image: acImg, tag: 'Summer Sale' },
  { name: 'TVs', slug: 'tvs', icon: 'Tv', image: tvImg, tag: '4K Smart' },
  { name: 'Fridges', slug: 'fridges', icon: 'Refrigerator', image: fridgeImg, tag: 'Top Rated' },
  { name: 'Washing Machines', slug: 'washing-machines', icon: 'WashingMachine', image: washingImg, tag: 'Trending' },
  { name: 'Accessories', slug: 'accessories', icon: 'Headphones', image: accessoryImg, tag: 'Combo Deals' },
  { name: 'Repairs', slug: 'repairs', icon: 'Wrench', tag: 'Same Day' },
]
