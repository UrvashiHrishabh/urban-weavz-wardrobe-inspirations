
import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="group card-shadow rounded-lg overflow-hidden bg-white">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-primary"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </div>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="text-primary font-semibold">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
