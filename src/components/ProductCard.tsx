import React from 'react';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ name, price, image, description }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-serif">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-accent font-medium mt-2">${price}</p>
      </div>
    </div>
  );
}