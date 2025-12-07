import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  return (
    <section id="colecao" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">Nossa Seleção</span>
          <h2 className="text-4xl md:text-5xl font-serif text-black mt-2">Coleção Exclusiva</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-3 uppercase tracking-widest text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver Detalhes
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-serif text-black group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 mt-1 font-medium">
                  {product.price.toLocaleString('pt-AO')} Kzs
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;