import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Product, CartItem } from './types';
import { MessageCircle } from 'lucide-react';
import { STORE_PHONE_NUMBER } from './constants';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product, selectedColor: string) => {
    setCartItems(prev => [...prev, { product, selectedColor, quantity: 1 }]);
    setIsCartOpen(true); // Automatically open cart as per requirements
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateCartColor = (index: number, newColor: string) => {
    setCartItems(prev => prev.map((item, i) => {
      if (i === index) {
        return { ...item, selectedColor: newColor };
      }
      return item;
    }));
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}`, '_blank');
  };

  return (
    <div className="font-sans text-dark-900 bg-white">
      <Header 
        onCartClick={() => setIsCartOpen(true)} 
        cartCount={cartItems.length}
      />
      
      <main>
        <Hero />
        <ProductGrid onProductClick={handleProductClick} />
        <About />
        <Testimonials />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <button 
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </button>

      {/* Modals and Drawers */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateColor={handleUpdateCartColor}
      />
    </div>
  );
};

export default App;