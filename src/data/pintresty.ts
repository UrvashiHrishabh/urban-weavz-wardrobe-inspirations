
export interface Accessory {
  id: string;
  name: string;
  image: string;
  price: string;
}

export interface OutfitInspiration {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  accessories: Accessory[];
  relatedProductIds: string[];
}

export const outfitCategories = [
  { id: "traditional", name: "Traditional" },
  { id: "casual", name: "Casual" },
  { id: "formal", name: "Formal" },
  { id: "party", name: "Party Wear" },
  { id: "workwear", name: "Work Wear" },
  { id: "beachwear", name: "Beach Wear" }
];

export const outfits: OutfitInspiration[] = [
  {
    id: "outfit1",
    title: "Traditional Festive Look",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=500",
    category: "traditional",
    description: "A vibrant traditional outfit perfect for festive occasions and celebrations. This ensemble combines classic elements with contemporary styling.",
    accessories: [
      {
        id: "acc1",
        name: "Statement Earrings",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=500",
        price: "$39.99"
      },
      {
        id: "acc2",
        name: "Embroidered Clutch",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=500",
        price: "$49.99"
      },
      {
        id: "acc3",
        name: "Traditional Bangles",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500",
        price: "$29.99"
      }
    ],
    relatedProductIds: ["w6", "w7", "m5"]
  },
  {
    id: "outfit2",
    title: "Contemporary Casual Style",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500",
    category: "casual",
    description: "A relaxed yet stylish casual outfit perfect for weekend outings and meeting friends. Comfort meets fashion with this effortless look.",
    accessories: [
      {
        id: "acc4",
        name: "Minimalist Watch",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=500",
        price: "$79.99"
      },
      {
        id: "acc5",
        name: "Leather Crossbody Bag",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500",
        price: "$89.99"
      },
      {
        id: "acc6",
        name: "Sunglasses",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=500",
        price: "$59.99"
      }
    ],
    relatedProductIds: ["w1", "w2", "m1"]
  },
  {
    id: "outfit3",
    title: "Evening Party Ensemble",
    image: "https://images.unsplash.com/photo-1622495964052-1d743932791a?auto=format&fit=crop&q=80&w=500",
    category: "party",
    description: "A glamorous outfit designed for evening parties and cocktail events. This look combines sophistication with a touch of boldness.",
    accessories: [
      {
        id: "acc7",
        name: "Crystal Embellished Clutch",
        image: "https://images.unsplash.com/photo-1594228773640-ef22b5b1ff9e?auto=format&fit=crop&q=80&w=500",
        price: "$99.99"
      },
      {
        id: "acc8",
        name: "Statement Necklace",
        image: "https://images.unsplash.com/photo-1599643477877-530eb83ABC8e?auto=format&fit=crop&q=80&w=500",
        price: "$69.99"
      },
      {
        id: "acc9",
        name: "Strappy Heels",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500",
        price: "$129.99"
      }
    ],
    relatedProductIds: ["w4", "m3", "w5"]
  },
  {
    id: "outfit4",
    title: "Business Professional Attire",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=500",
    category: "workwear",
    description: "A polished professional outfit perfect for business meetings and corporate environments. This look exudes confidence and competence.",
    accessories: [
      {
        id: "acc10",
        name: "Leather Portfolio",
        image: "https://images.unsplash.com/photo-1512179543549-0fae9e33beb5?auto=format&fit=crop&q=80&w=500",
        price: "$149.99"
      },
      {
        id: "acc11",
        name: "Classic Wristwatch",
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=500",
        price: "$199.99"
      },
      {
        id: "acc12",
        name: "Leather Belt",
        image: "https://images.unsplash.com/photo-1553465528-5a213ccc0c7b?auto=format&fit=crop&q=80&w=500",
        price: "$59.99"
      }
    ],
    relatedProductIds: ["w5", "m3", "m4"]
  },
  {
    id: "outfit5",
    title: "Formal Elegance",
    image: "https://images.unsplash.com/photo-1597983073512-90bd150e275a?auto=format&fit=crop&q=80&w=500",
    category: "formal",
    description: "A sophisticated formal outfit for special occasions and upscale events. This elegant look combines timeless style with modern touches.",
    accessories: [
      {
        id: "acc13",
        name: "Pearl Earrings",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=500",
        price: "$89.99"
      },
      {
        id: "acc14",
        name: "Evening Clutch",
        image: "https://images.unsplash.com/photo-1575832091855-6c8b874c93cd?auto=format&fit=crop&q=80&w=500",
        price: "$79.99"
      },
      {
        id: "acc15",
        name: "Diamond Bracelet",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=500",
        price: "$249.99"
      }
    ],
    relatedProductIds: ["w4", "m3", "m6"]
  },
  {
    id: "outfit6",
    title: "Summer Beach Look",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=500",
    category: "beachwear",
    description: "A breezy and stylish summer look perfect for beach days and vacation vibes. This outfit combines comfort with effortless style.",
    accessories: [
      {
        id: "acc16",
        name: "Straw Hat",
        image: "https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?auto=format&fit=crop&q=80&w=500",
        price: "$34.99"
      },
      {
        id: "acc17",
        name: "Beach Tote",
        image: "https://images.unsplash.com/photo-1603189825041-02fb9f00ed36?auto=format&fit=crop&q=80&w=500",
        price: "$49.99"
      },
      {
        id: "acc18",
        name: "Shell Necklace",
        image: "https://images.unsplash.com/photo-1620655351143-46efb0f9d2e8?auto=format&fit=crop&q=80&w=500",
        price: "$29.99"
      }
    ],
    relatedProductIds: ["w1", "w2", "m1"]
  }
];

export const getOutfitsByCategory = (category?: string) => {
  if (!category || category === "all") return outfits;
  return outfits.filter(outfit => outfit.category === category);
};

export const getOutfitById = (id: string) => {
  return outfits.find(outfit => outfit.id === id);
};
