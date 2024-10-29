import React from 'react';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <button className="p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
            <img 
              src="https://i.imgur.com/YoHhkZd.png" 
              alt="P & Dunni Logo" 
              className="h-16 w-16 object-contain hidden md:block"
            />
          </div>
          
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="hover:text-accent transition">Shop</a>
            <a href="#" className="hover:text-accent transition">Collections</a>
            <a href="#" className="hover:text-accent transition">About</a>
          </div>

          <div className="text-center flex-1 lg:flex-none">
            <h1 className="text-2xl font-serif">P & Dunni</h1>
            <p className="text-xs tracking-widest text-accent">A SCENT COMPANY</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}