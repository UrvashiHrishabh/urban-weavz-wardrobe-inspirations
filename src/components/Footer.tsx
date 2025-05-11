
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Urban Weavz</h3>
            <p className="text-gray-300 mb-4">
              Discover the perfect outfit for every occasion. Urban Weavz offers a curated 
              collection of dresses for men, women, and children.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#women" className="text-gray-300 hover:text-gold transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/#men" className="text-gray-300 hover:text-gold transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/#kids" className="text-gray-300 hover:text-gold transition-colors">
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link to="/pintresty" className="text-gray-300 hover:text-gold transition-colors">
                  Outfit Inspiration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gold transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gold transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gold transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates on new arrivals and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-black w-full rounded-l focus:outline-none"
              />
              <button className="bg-gold text-navy px-4 py-2 rounded-r font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Urban Weavz. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
