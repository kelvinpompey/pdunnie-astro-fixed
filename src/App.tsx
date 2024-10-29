import React from 'react';
import { Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const featuredProducts = [
    {
      name: "Midnight Oud",
      price: 299,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
      description: "A mysterious blend of rare oud and midnight jasmine"
    },
    {
      name: "Golden Rose",
      price: 259,
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800",
      description: "Luxurious Damascus rose with golden amber"
    },
    {
      name: "Ocean Mist",
      price: 229,
      image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800",
      description: "Fresh aquatic notes with coastal sage"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-pattern text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-shadow">
            Discover Your Signature Scent
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Handcrafted luxury fragrances that tell your unique story
          </p>
          <button className="bg-accent text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Sparkles className="w-5 h-5 text-accent" />
            <h2 className="text-3xl font-serif text-primary text-center">Featured Fragrances</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed mb-8">
              P & Dunni was born from a passion for creating extraordinary scents that capture moments, 
              emotions, and memories. Each fragrance is carefully crafted using the finest ingredients, 
              blending traditional perfumery with modern sophistication.
            </p>
            <button className="border border-accent text-accent px-8 py-3 rounded-full hover:bg-accent hover:text-primary transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;