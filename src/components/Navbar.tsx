
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-burgundy">Urban Weavz</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-burgundy transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium hover:text-burgundy transition-colors">
                Women
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/#women-casual" className="w-full">Casual Dresses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/#women-formal" className="w-full">Formal Dresses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/#women-ethnic" className="w-full">Ethnic Wear</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium hover:text-burgundy transition-colors">
                Men
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/#men-casual" className="w-full">Casual Wear</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/#men-formal" className="w-full">Formal Wear</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/#men-ethnic" className="w-full">Ethnic Wear</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium hover:text-burgundy transition-colors">
                Kids
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/#kids-boys" className="w-full">Boys</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/#kids-girls" className="w-full">Girls</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/pintresty" className="font-medium hover:text-burgundy transition-colors">
              Pintresty
            </Link>
          </nav>

          {/* Right Menu (Search, Account, Cart) */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t mt-4 animate-fade-in">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block py-2 hover:text-burgundy transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="py-2">Women</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/#women-casual"
                      className="block py-1 text-sm hover:text-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Casual Dresses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#women-formal"
                      className="block py-1 text-sm hover:text-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Formal Dresses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#women-ethnic"
                      className="block py-1 text-sm hover:text-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Ethnic Wear
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="py-2">Men</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/#men-casual"
                      className="block py-1 text-sm hover:text-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Casual Wear
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#men-formal"
                      className="block py-1 text-sm hover:text-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Formal Wear
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#men-ethnic"
                      className="block py-1 text-sm hover:text-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Ethnic Wear
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="py-2">Kids</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/#kids-boys"
                      className="block py-1 text-sm hover:text-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Boys
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/#kids-girls"
                      className="block py-1 text-sm hover:text-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Girls
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/pintresty"
                  className="block py-2 hover:text-burgundy transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pintresty
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
