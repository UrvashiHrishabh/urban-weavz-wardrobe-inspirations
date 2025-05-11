
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { outfitCategories, getOutfitsByCategory } from "@/data/pintresty";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PintrestyPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredOutfits = getOutfitsByCategory(activeCategory === "all" ? undefined : activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Outfit Inspirations</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover curated outfit ideas for every occasion. Click on any outfit to explore 
            accessory recommendations and find similar styles.
          </p>
        </div>
      </section>
      
      {/* Category Tabs */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              {outfitCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>
      
      {/* Outfits Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOutfits.map((outfit) => (
              <Link 
                to={`/pintresty/${outfit.id}`} 
                key={outfit.id}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={outfit.image}
                      alt={outfit.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button className="bg-white/80 backdrop-blur-sm text-burgundy hover:bg-white">
                        View Details
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-burgundy">
                        {outfitCategories.find(c => c.id === outfit.category)?.name || outfit.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-navy group-hover:text-burgundy transition-colors">
                      {outfit.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {outfit.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PintrestyPage;
