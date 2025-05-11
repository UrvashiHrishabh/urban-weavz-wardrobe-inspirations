
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProductSection from "@/components/ProductSection";
import { filterProducts } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const womenCasualProducts = filterProducts("women", "casual");
  const womenFormalProducts = filterProducts("women", "formal");
  const menCasualProducts = filterProducts("men", "casual");
  const menFormalProducts = filterProducts("men", "formal");
  const kidsProducts = filterProducts("kids");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-softpink to-lilac py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight text-foreground">
            Discover Your Perfect Style at Urban Weavz
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-foreground/90">
            Curated collections of dresses for every occasion, person, and style preference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/#women">Shop Women</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/#men">Shop Men</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/#kids">Shop Kids</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      {/* Featured Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Find Outfit Inspiration</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover curated outfit ideas and styling inspiration on our Pintresty page.
          </p>
          <Button asChild>
            <Link to="/pintresty" className="flex items-center">
              Explore Outfit Ideas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Women's Collection */}
      <div id="women">
        <ProductSection
          id="women-casual"
          title="Women's Casual Collection"
          subtitle="Effortless everyday styles for the modern woman"
          products={womenCasualProducts}
        />
        <ProductSection
          id="women-formal"
          title="Women's Formal Collection"
          subtitle="Elegant designs for special occasions"
          products={womenFormalProducts}
        />
      </div>
      
      {/* Men's Collection */}
      <div id="men">
        <ProductSection
          id="men-casual"
          title="Men's Casual Collection"
          subtitle="Comfortable and stylish everyday wear"
          products={menCasualProducts}
        />
        <ProductSection
          id="men-formal"
          title="Men's Formal Collection"
          subtitle="Sophisticated styles for formal occasions"
          products={menFormalProducts}
        />
      </div>
      
      {/* Kids' Collection */}
      <div id="kids">
        <ProductSection
          id="kids-collection"
          title="Kids' Collection"
          subtitle="Adorable styles for the little ones"
          products={kidsProducts}
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
