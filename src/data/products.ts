
export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  gender: 'women' | 'men' | 'kids';
  subCategory: string;
  description?: string;
}

export const products: Product[] = [
  // Women's Collection - Casual Dresses
  {
    id: "w1",
    name: "Floral Summer Dress",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=500",
    category: "Casual",
    gender: "women",
    subCategory: "casual",
    description: "A beautiful floral summer dress perfect for casual outings and beach days."
  },
  {
    id: "w2",
    name: "Off-Shoulder Maxi Dress",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=500",
    category: "Casual",
    gender: "women",
    subCategory: "casual",
    description: "An elegant off-shoulder maxi dress designed for comfort and style."
  },
  {
    id: "w3",
    name: "Denim Shirt Dress",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb1bd5d44?auto=format&fit=crop&q=80&w=500",
    category: "Casual",
    gender: "women",
    subCategory: "casual",
    description: "A versatile denim shirt dress that can be dressed up or down for any occasion."
  },
  
  // Women's Collection - Formal Dresses
  {
    id: "w4",
    name: "Elegant Evening Gown",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&q=80&w=500",
    category: "Formal",
    gender: "women",
    subCategory: "formal",
    description: "A stunning evening gown designed for formal events and special occasions."
  },
  {
    id: "w5",
    name: "Business Pencil Dress",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=500",
    category: "Formal",
    gender: "women",
    subCategory: "formal",
    description: "An elegant pencil dress perfect for business meetings and professional settings."
  },
  
  // Women's Collection - Ethnic Wear
  {
    id: "w6",
    name: "Traditional Embroidered Dress",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1631233859262-0c7115e307c0?auto=format&fit=crop&q=80&w=500",
    category: "Ethnic",
    gender: "women",
    subCategory: "ethnic",
    description: "A beautifully embroidered traditional dress for cultural celebrations."
  },
  {
    id: "w7",
    name: "Festive Anarkali Suit",
    price: "$119.99",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=500",
    category: "Ethnic",
    gender: "women",
    subCategory: "ethnic",
    description: "An elegant Anarkali suit perfect for festivals and special occasions."
  },
  
  // Men's Collection - Casual Wear
  {
    id: "m1",
    name: "Casual Linen Shirt",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=500",
    category: "Casual",
    gender: "men",
    subCategory: "casual",
    description: "A comfortable linen shirt perfect for casual everyday wear."
  },
  {
    id: "m2",
    name: "Relaxed Fit Polo Shirt",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1626753987144-6a42863031a9?auto=format&fit=crop&q=80&w=500",
    category: "Casual",
    gender: "men",
    subCategory: "casual",
    description: "A classic polo shirt with a relaxed fit for everyday comfort."
  },
  
  // Men's Collection - Formal Wear
  {
    id: "m3",
    name: "Classic Business Suit",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500",
    category: "Formal",
    gender: "men",
    subCategory: "formal",
    description: "A timeless business suit for professional settings and formal events."
  },
  {
    id: "m4",
    name: "Tailored Dress Shirt",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=500",
    category: "Formal",
    gender: "men",
    subCategory: "formal",
    description: "A tailored dress shirt designed for comfort and professional style."
  },
  
  // Men's Collection - Ethnic Wear
  {
    id: "m5",
    name: "Traditional Kurta Set",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1511220043390-e929f5111bf6?auto=format&fit=crop&q=80&w=500",
    category: "Ethnic",
    gender: "men",
    subCategory: "ethnic",
    description: "A handcrafted kurta set perfect for traditional events and celebrations."
  },
  {
    id: "m6",
    name: "Festival Wear Sherwani",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1601924381342-dc662f47cec3?auto=format&fit=crop&q=80&w=500",
    category: "Ethnic",
    gender: "men",
    subCategory: "ethnic",
    description: "An elegant sherwani for weddings and festive celebrations."
  },
  
  // Kids' Collection - Boys
  {
    id: "k1",
    name: "Boys' Casual T-Shirt",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=500",
    category: "Casual",
    gender: "kids",
    subCategory: "boys",
    description: "A comfortable everyday t-shirt for active boys."
  },
  {
    id: "k2",
    name: "Boys' Formal Suit Set",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1588464083059-a4f795b752ee?auto=format&fit=crop&q=80&w=500",
    category: "Formal",
    gender: "kids",
    subCategory: "boys",
    description: "An adorable formal suit for special occasions and events."
  },
  
  // Kids' Collection - Girls
  {
    id: "k3",
    name: "Girls' Summer Dress",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1541580621-39f717ce77cd?auto=format&fit=crop&q=80&w=500",
    category: "Casual",
    gender: "kids",
    subCategory: "girls",
    description: "A cute and comfortable summer dress for little girls."
  },
  {
    id: "k4",
    name: "Girls' Party Wear",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1693952875764-e95224466d38?auto=format&fit=crop&q=80&w=500",
    category: "Formal",
    gender: "kids",
    subCategory: "girls",
    description: "A beautiful party dress for special celebrations and events."
  }
];

// Helper function to filter products
export const filterProducts = (gender?: string, subCategory?: string) => {
  if (!gender) return products;
  
  return products.filter(product => {
    if (gender && product.gender !== gender) return false;
    if (subCategory && product.subCategory !== subCategory) return false;
    return true;
  });
};

// Get related products (same gender and category but different product)
export const getRelatedProducts = (productId: string, limit: number = 4) => {
  const currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return [];
  
  return products.filter(p => 
    p.id !== productId && 
    p.gender === currentProduct.gender &&
    p.category === currentProduct.category
  ).slice(0, limit);
};

// Get product by ID
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
