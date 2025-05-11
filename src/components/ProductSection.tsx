
import React from "react";
import ProductCard from "@/components/ProductCard";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  id?: string;
}

const ProductSection = ({ title, subtitle, products, id }: ProductSectionProps) => {
  return (
    <section id={id} className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
