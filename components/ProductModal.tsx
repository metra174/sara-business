import React, { useState } from 'react';
import { X, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, color: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto grid md:grid-cols-2 shadow-2xl animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <div className="h-64 md:h-full bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <span className="text-gold-500 uppercase tracking-widest text-sm mb-2 font-bold">
            {product.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
            {product.name}
          </h2>
          <p className="text-2xl font-light text-gray-900 mb-6">
            {product.price.toLocaleString('pt-AO')} Kzs
          </p>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Cores Disponíveis</h3>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border text-sm transition-all ${
                    selectedColor === color 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-300 text-gray-600 hover:border-gold-500'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-6 uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag size={20} />
              Adicionar ao Carrinho
            </button>
            <p className="text-xs text-center text-gray-500">
              *Selecione a cor desejada antes de adicionar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;