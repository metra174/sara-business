import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://i.imgur.com/p8eVZLG.png" 
            alt="Sara Business" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {['Início', 'Coleção', 'Depoimentos', 'Contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace('ç', 'c').replace('ã', 'a').replace('í', 'i'))}
              className={`text-sm uppercase tracking-wider hover:text-gold-400 transition-colors ${
                isScrolled ? 'text-white' : 'text-white/90'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onCartClick}
            className="relative p-2 text-white hover:text-gold-400 transition-colors"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 p-6 flex flex-col space-y-4 shadow-xl">
           {['Início', 'Coleção', 'Depoimentos', 'Contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace('ç', 'c').replace('ã', 'a').replace('í', 'i'))}
              className="text-white hover:text-gold-400 text-left uppercase text-sm tracking-wider"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;