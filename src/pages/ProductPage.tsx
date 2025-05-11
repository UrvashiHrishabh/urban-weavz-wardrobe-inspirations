
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProductById, getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Heart, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const relatedProducts = getRelatedProducts(id || "", 4);
  const { toast } = useToast();
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-4">Sorry, we couldn't find the product you're looking for.</p>
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-burgundy">Home</Link> / {" "}
          <Link to={`/#${product.gender}`} className="hover:text-burgundy">
            {product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}
          </Link> / {" "}
          <span className="text-burgundy">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-navy mb-2">{product.name}</h1>
            <div className="text-2xl font-semibold text-burgundy mb-4">
              {product.price}
            </div>
            <p className="text-gray-600 mb-6">
              {product.description || "This beautiful piece from our collection combines style and comfort, making it perfect for various occasions. Crafted with high-quality materials and attention to detail."}
            </p>
            
            <div className="space-y-6">
              {/* Size Selection - Placeholder */}
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <div
                      key={size}
                      className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-burgundy hover:bg-burgundy/5 transition-colors"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quantity - Placeholder */}
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex border border-gray-300 rounded-md w-32">
                  <button className="px-3 py-2 border-r border-gray-300">-</button>
                  <div className="flex-1 text-center py-2">1</div>
                  <button className="px-3 py-2 border-l border-gray-300">+</button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={handleAddToCart}
                  className="bg-burgundy hover:bg-burgundy/90 flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleAddToWishlist}
                  className="border-burgundy text-burgundy hover:bg-burgundy/5"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>
              
              {/* Product Details */}
              <div className="pt-6">
                <h3 className="font-medium mb-2">Product Details</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Category: {product.category}</li>
                  <li>Gender: {product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}</li>
                  <li>Item ID: {product.id}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">You May Also Like</h2>
            <Link to={`/#${product.gender}`} className="text-burgundy hover:underline">
              View More
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                id={relatedProduct.id}
                name={relatedProduct.name}
                price={relatedProduct.price}
                image={relatedProduct.image}
                category={relatedProduct.category}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
