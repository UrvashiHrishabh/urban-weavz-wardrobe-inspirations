
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getOutfitById } from "@/data/pintresty";
import { getProductById } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";

const OutfitDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const outfit = getOutfitById(id || "");
  
  if (!outfit) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Outfit Not Found</h2>
            <p className="mb-4">Sorry, we couldn't find the outfit inspiration you're looking for.</p>
            <Button asChild>
              <Link to="/pintresty">Return to Pintresty</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = outfit.relatedProductIds.map(
    (id) => getProductById(id)
  ).filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Breadcrumb & Back Button */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-burgundy">Home</Link> / {" "}
            <Link to="/pintresty" className="hover:text-burgundy">Pintresty</Link> / {" "}
            <span className="text-burgundy">{outfit.title}</span>
          </div>
          <Button asChild variant="ghost" className="text-burgundy">
            <Link to="/pintresty" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Inspirations
            </Link>
          </Button>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Outfit Image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src={outfit.image} 
              alt={outfit.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Outfit Details */}
          <div>
            <span className="inline-block bg-burgundy/10 text-burgundy px-3 py-1 rounded-full text-sm font-medium mb-4">
              {outfit.category.charAt(0).toUpperCase() + outfit.category.slice(1)}
            </span>
            <h1 className="text-3xl font-bold text-navy mb-4">{outfit.title}</h1>
            <p className="text-gray-700 mb-6">
              {outfit.description}
            </p>
            
            <Separator className="my-6" />
            
            {/* Accessories Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Complete The Look</h2>
              <p className="text-gray-600 mb-6">
                These accessories perfectly complement this outfit:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {outfit.accessories.map((accessory) => (
                  <div key={accessory.id} className="bg-white rounded-lg overflow-hidden border hover-scale card-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={accessory.image} 
                        alt={accessory.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium">{accessory.name}</h3>
                      <p className="text-burgundy font-semibold mt-1">{accessory.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Similar Styles You'll Love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => product && (
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
        
        {/* CTA Section */}
        <div className="bg-navy text-white p-8 rounded-lg text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Create Your Dream Wardrobe</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Browse our complete collection to find more styles that match your taste and personality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-burgundy hover:bg-burgundy/90">
              <Link to="/">Shop All Collections</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/pintresty">More Outfit Inspirations</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OutfitDetailPage;
