const products = [
  {
    id: 1,
    name: "Nike Air Max",
    category: "Shoes",
    price: 4999,
    rating: 4.5,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A stylish and comfortable everyday sneaker designed for active lifestyles. It combines a sporty look with lightweight cushioning for all-day comfort.",

    highlights: [
      "Lightweight and comfortable design",
      "Cushioned sole for everyday use",
      "Breathable upper construction",
      "Suitable for casual and active wear",
    ],
  },

  {
    id: 2,
    name: "Classic Cotton Shirt",
    category: "Clothing",
    price: 1499,
    rating: 4.2,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A timeless cotton shirt designed for effortless everyday style. Its soft fabric and classic fit make it easy to wear for both casual and semi-formal occasions.",

    highlights: [
      "Soft cotton fabric",
      "Comfortable regular fit",
      "Breathable material",
      "Easy to style with different outfits",
    ],
  },

  {
    id: 3,
    name: "Luxury Chronograph",
    category: "Watches",
    price: 7999,
    rating: 4.7,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A sophisticated chronograph watch combining a premium appearance with a timeless design. Perfect for adding a refined touch to everyday and formal outfits.",

    highlights: [
      "Elegant chronograph-inspired design",
      "Premium metal finish",
      "Classic analog display",
      "Suitable for casual and formal wear",
    ],
  },

  {
    id: 4,
    name: "Urban Running Shoes",
    category: "Shoes",
    price: 3299,
    rating: 4.4,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "Modern running shoes designed for everyday movement and casual streetwear. The lightweight construction provides a comfortable feel throughout the day.",

    highlights: [
      "Lightweight construction",
      "Comfortable cushioning",
      "Sporty urban design",
      "Great for everyday activities",
    ],
  },

  {
    id: 5,
    name: "Oversized Streetwear Tee",
    category: "Clothing",
    price: 999,
    rating: 4.3,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A relaxed oversized T-shirt built for modern streetwear looks. Its comfortable silhouette makes it an easy choice for everyday outfits.",

    highlights: [
      "Relaxed oversized fit",
      "Soft everyday fabric",
      "Modern streetwear style",
      "Comfortable for daily wear",
    ],
  },

  {
    id: 6,
    name: "Minimalist Black Watch",
    category: "Watches",
    price: 5499,
    rating: 4.6,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A clean and minimalist black watch designed for people who prefer a simple and sophisticated appearance.",

    highlights: [
      "Minimalist black design",
      "Clean analog dial",
      "Elegant everyday appearance",
      "Works with casual and formal outfits",
    ],
  },

  {
    id: 7,
    name: "Premium Leather Sneakers",
    category: "Shoes",
    price: 4599,
    rating: 4.8,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "Premium-inspired sneakers featuring a clean leather-style appearance and a versatile silhouette suitable for everyday outfits.",

    highlights: [
      "Premium leather-style finish",
      "Comfortable everyday construction",
      "Versatile modern design",
      "Suitable for casual outfits",
    ],
  },

  {
    id: 8,
    name: "Relaxed Fit Hoodie",
    category: "Clothing",
    price: 1999,
    rating: 4.5,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A relaxed hoodie designed for comfort and casual styling. Its simple silhouette works well with everyday streetwear outfits.",

    highlights: [
      "Relaxed comfortable fit",
      "Soft casual fabric",
      "Classic hooded design",
      "Ideal for everyday layering",
    ],
  },

  {
    id: 9,
    name: "Classic Silver Watch",
    category: "Watches",
    price: 6499,
    rating: 4.7,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A classic silver-tone watch with a refined appearance that works effortlessly with both everyday and formal clothing.",

    highlights: [
      "Classic silver-tone design",
      "Elegant analog display",
      "Versatile everyday styling",
      "Refined premium appearance",
    ],
  },

  {
    id: 10,
    name: "Everyday Running Shoes",
    category: "Shoes",
    price: 2799,
    rating: 4.1,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "Lightweight everyday running shoes designed for comfort during walking, casual activities, and daily movement.",

    highlights: [
      "Lightweight feel",
      "Comfortable sole",
      "Sporty everyday design",
      "Suitable for walking and casual use",
    ],
  },

  {
    id: 11,
    name: "Premium Denim Jacket",
    category: "Clothing",
    price: 2499,
    rating: 4.4,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A classic denim jacket that adds an effortless streetwear touch to everyday outfits. Easy to layer across different seasons.",

    highlights: [
      "Classic denim construction",
      "Versatile layering piece",
      "Timeless casual style",
      "Easy to pair with everyday outfits",
    ],
  },

  {
    id: 12,
    name: "Modern Gold Watch",
    category: "Watches",
    price: 8999,
    rating: 4.9,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A bold gold-tone watch designed to stand out. Its sophisticated appearance makes it a strong choice for special occasions and formal styling.",

    highlights: [
      "Modern gold-tone appearance",
      "Sophisticated dial design",
      "Statement accessory",
      "Suitable for formal occasions",
    ],
  },

  {
    id: 13,
    name: "Luxury Face Serum",
    category: "Beauty",
    price: 1299,
    rating: 4.6,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A lightweight facial serum designed to fit easily into a simple daily skincare routine and leave skin feeling refreshed and hydrated.",

    highlights: [
      "Lightweight serum texture",
      "Easy daily skincare application",
      "Hydrating feel",
      "Suitable for everyday routines",
    ],
  },

  {
    id: 14,
    name: "Matte Lipstick",
    category: "Beauty",
    price: 799,
    rating: 4.4,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A smooth matte lipstick designed to provide a bold and polished finish while complementing a variety of everyday looks.",

    highlights: [
      "Smooth matte finish",
      "Bold color appearance",
      "Easy application",
      "Suitable for everyday and evening looks",
    ],
  },

  {
    id: 15,
    name: "Moisturizing Cream",
    category: "Beauty",
    price: 999,
    rating: 4.5,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A daily moisturizing cream with a smooth texture designed to leave skin feeling soft and comfortable throughout the day.",

    highlights: [
      "Smooth moisturizing texture",
      "Designed for daily use",
      "Comfortable lightweight feel",
      "Easy addition to skincare routines",
    ],
  },

  {
    id: 16,
    name: "Perfume Collection",
    category: "Beauty",
    price: 2499,
    rating: 4.8,
    quantity: 1,

    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",

    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    ],

    description:
      "A sophisticated fragrance collection designed to add a fresh and elegant finishing touch to your everyday style.",

    highlights: [
      "Elegant fragrance presentation",
      "Stylish bottle design",
      "Suitable for everyday use",
      "Great choice for special occasions",
    ],
  },
]

export default products