export const products = [
  // Laptops
  { id: 'lap-1', name: 'AeroBook 14 Slim i5 11th Gen', category: 'laptops', icon: 'Laptop', brand: 'AeroTech', price: 42990, mrp: 58990, rating: 4.4, reviews: 312, badge: 'Bestseller' },
  { id: 'lap-2', name: 'GameForce X15 RTX Gaming Laptop', category: 'laptops', icon: 'Laptop', brand: 'ForceX', price: 79990, mrp: 99990, rating: 4.6, reviews: 187, badge: 'Hot Deal' },
  { id: 'lap-3', name: 'UltraLite Air 13 M-series', category: 'laptops', icon: 'Laptop', brand: 'NimbusAir', price: 64990, mrp: 74990, rating: 4.7, reviews: 264, badge: 'New' },

  // Mobiles
  { id: 'mob-1', name: 'Nova X5 Pro 5G 8GB/128GB', category: 'mobiles', icon: 'Smartphone', brand: 'NovaTech', price: 17999, mrp: 22999, rating: 4.3, reviews: 941, badge: 'Bestseller' },
  { id: 'mob-2', name: 'Zenith 12 Ultra 12GB/256GB', category: 'mobiles', icon: 'Smartphone', brand: 'Zenith', price: 54999, mrp: 64999, rating: 4.5, reviews: 528, badge: 'Trending' },
  { id: 'mob-3', name: 'Pulse Lite 4G 4GB/64GB', category: 'mobiles', icon: 'Smartphone', brand: 'Pulse', price: 8499, mrp: 10999, rating: 4.1, reviews: 1204, badge: 'Budget Pick' },

  // Desktops
  { id: 'des-1', name: 'PowerCore i5 Desktop PC (Full Set)', category: 'desktops', icon: 'Monitor', brand: 'PowerCore', price: 34990, mrp: 42990, rating: 4.3, reviews: 156, badge: 'Office Pick' },
  { id: 'des-2', name: 'CreatorStation Ryzen 7 Workstation', category: 'desktops', icon: 'Monitor', brand: 'CreatorHub', price: 68990, mrp: 82990, rating: 4.6, reviews: 98, badge: 'New' },

  // Tabs
  { id: 'tab-1', name: 'TabOne 10.4" 4GB/64GB Wi-Fi', category: 'tabs', icon: 'Tablet', brand: 'TabOne', price: 13999, mrp: 17999, rating: 4.2, reviews: 233, badge: 'Bestseller' },
  { id: 'tab-2', name: 'TabPro 11" LTE + Pen', category: 'tabs', icon: 'Tablet', brand: 'TabOne', price: 26999, mrp: 32999, rating: 4.5, reviews: 141, badge: 'Trending' },

  // CCTV
  { id: 'cctv-1', name: '4-Camera Full HD CCTV Combo + DVR', category: 'cctv', icon: 'Camera', brand: 'SecureEye', price: 10999, mrp: 15999, rating: 4.4, reviews: 402, badge: 'Free Install' },
  { id: 'cctv-2', name: 'WiFi Smart Bullet Camera 5MP', category: 'cctv', icon: 'Camera', brand: 'SecureEye', price: 2199, mrp: 2999, rating: 4.2, reviews: 610, badge: 'Bestseller' },

  // ACs
  { id: 'ac-1', name: '1.5 Ton 5 Star Split AC', category: 'acs', icon: 'Snowflake', brand: 'CoolAir', price: 34990, mrp: 46990, rating: 4.4, reviews: 389, badge: 'Summer Sale' },
  { id: 'ac-2', name: '1 Ton Inverter Window AC', category: 'acs', icon: 'Snowflake', brand: 'CoolAir', price: 24990, mrp: 31990, rating: 4.1, reviews: 205, badge: 'Budget Pick' },

  // TVs
  { id: 'tv-1', name: '43" 4K Ultra HD Smart LED TV', category: 'tvs', icon: 'Tv', brand: 'VisionMax', price: 22999, mrp: 32999, rating: 4.5, reviews: 874, badge: 'Bestseller' },
  { id: 'tv-2', name: '55" QLED Google TV', category: 'tvs', icon: 'Tv', brand: 'VisionMax', price: 41999, mrp: 54999, rating: 4.6, reviews: 356, badge: 'Trending' },

  // Fridges
  { id: 'frg-1', name: '190L Single Door Refrigerator 3 Star', category: 'fridges', icon: 'Refrigerator', brand: 'FreshKeep', price: 13990, mrp: 17990, rating: 4.2, reviews: 298, badge: 'Top Rated' },
  { id: 'frg-2', name: '340L Frost Free Double Door', category: 'fridges', icon: 'Refrigerator', brand: 'FreshKeep', price: 27990, mrp: 34990, rating: 4.4, reviews: 176, badge: 'New' },

  // Washing Machines
  { id: 'wm-1', name: '7Kg Fully Automatic Front Load', category: 'washing-machines', icon: 'WashingMachine', brand: 'CleanWave', price: 19990, mrp: 26990, rating: 4.3, reviews: 267, badge: 'Trending' },
  { id: 'wm-2', name: '6.5Kg Semi-Automatic Top Load', category: 'washing-machines', icon: 'WashingMachine', brand: 'CleanWave', price: 8990, mrp: 11990, rating: 4.0, reviews: 412, badge: 'Budget Pick' },

  // Accessories
  { id: 'acc-1', name: 'Wireless Bluetooth Earbuds Pro', category: 'accessories', icon: 'Headphones', brand: 'SoundEdge', price: 1499, mrp: 2999, rating: 4.3, reviews: 1523, badge: 'Combo Deal' },
  { id: 'acc-2', name: '65W Fast Charger + Cable Combo', category: 'accessories', icon: 'Headphones', brand: 'PowerLine', price: 799, mrp: 1299, rating: 4.1, reviews: 987, badge: 'Bestseller' },
]

export const getProductsByCategory = (slug) =>
  slug === 'all' ? products : products.filter((p) => p.category === slug)
