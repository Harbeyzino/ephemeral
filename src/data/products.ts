import { Product, Category } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Celestial Silk Scarf",
    description: "Handcrafted silk scarf with a unique celestial pattern that changes appearance depending on how it's draped. Made from sustainably sourced silk using traditional techniques.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1584592174765-c5ebd8149f6c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1584592174765-c5ebd8149f6c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1584592174765-c5ebd8149f6c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1", 
      "https://images.unsplash.com/photo-1584592174765-c5ebd8149f6c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "accessories",
    featured: true,
    inStock: true,
    rating: 4.8,
    ratingCount: 42
  },
  {
    id: 2,
    name: "Artisan Ceramic Vase",
    description: "Each vase is uniquely handcrafted by master ceramicists. Perfect for displaying dried flowers or as a standalone sculptural piece.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1612196808214-b40b927fe6d9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1612196808214-b40b927fe6d9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1612196808214-b40b927fe6d9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1612196808214-b40b927fe6d9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "home",
    inStock: true,
    rating: 4.6,
    ratingCount: 28
  },
  {
    id: 3,
    name: "Botanical Canvas Print",
    description: "Limited edition botanical print on museum-quality canvas. Each piece is numbered and comes with a certificate of authenticity.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "art",
    featured: true,
    inStock: true
  },
  {
    id: 4,
    name: "Artisanal Coffee Collection",
    description: "Set of three single-origin coffees, each with distinct flavor profiles. Ethically sourced and roasted in small batches.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "food",
    inStock: true
  },
  {
    id: 5,
    name: "Brass Geometric Earrings",
    description: "Minimalist earrings handmade from recycled brass. Light enough for all-day wear while making a distinctive statement.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "jewelry",
    featured: true,
    inStock: true
  },
  {
    id: 6,
    name: "Handbound Leather Journal",
    description: "Each journal is carefully crafted using traditional bookbinding techniques. Features premium leather cover and acid-free pages.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1518893494097-8bc7296abaa6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1518893494097-8bc7296abaa6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1518893494097-8bc7296abaa6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1518893494097-8bc7296abaa6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "stationery",
    inStock: true
  },
  {
    id: 7,
    name: "Merino Wool Throw Blanket",
    description: "Luxuriously soft throw blanket woven from ethically sourced merino wool. Perfect for cool evenings and adding texture to any space.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1580374004682-23dec7298a2e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1580374004682-23dec7298a2e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1580374004682-23dec7298a2e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1580374004682-23dec7298a2e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "home",
    inStock: true
  },
  {
    id: 8,
    name: "Handblown Glass Pendant Light",
    description: "Each pendant light is uniquely crafted by skilled artisans. The subtle color variations ensure no two pieces are exactly alike.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "home",
    featured: true,
    inStock: true
  },
  {
    id: 9,
    name: "Botanical Letterpress Card Set",
    description: "Set of eight letterpress cards featuring intricate botanical designs. Printed on premium recycled cotton paper.",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1593806812862-1dc510b769a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1593806812862-1dc510b769a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1593806812862-1dc510b769a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1593806812862-1dc510b769a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "stationery",
    inStock: true
  },
  {
    id: 10,
    name: "Hand-Carved Wooden Serving Bowl",
    description: "Each bowl is skillfully carved from a single piece of sustainable hardwood, showcasing the natural grain patterns.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "kitchen",
    inStock: true
  },
  {
    id: 11,
    name: "Limited Edition Art Print",
    description: "Signed and numbered art print from acclaimed artist. Museum-quality printing on archival paper.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "art",
    inStock: true
  },
  {
    id: 12,
    name: "Organic Soy Candle Collection",
    description: "Set of three hand-poured candles made with organic soy wax and premium essential oils for a clean, long-lasting burn.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1603006905003-be475563f266?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563f266?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      "https://images.unsplash.com/photo-1603006905003-be475563f266?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=1",
      "https://images.unsplash.com/photo-1603006905003-be475563f266?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&alt=2"
    ],
    category: "home",
    inStock: true
  }
];

export const categories: Category[] = [
  { id: 1, name: "accessories", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" },
  { id: 2, name: "home", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" },
  { id: 3, name: "art", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" },
  { id: 4, name: "food", image: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" },
  { id: 5, name: "jewelry", image: "https://images.unsplash.com/photo-1611652022419-a9419f42a6af?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" },
  { id: 6, name: "stationery", image: "https://images.unsplash.com/photo-1598387993441-a364f854c3a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" },
  { id: 7, name: "kitchen", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
