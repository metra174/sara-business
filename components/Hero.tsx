import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2070&auto=format&fit=crop"
          alt="Fashion Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Nova Coleção 2025
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          Estilo que <span className="text-gold-400 italic">inspira</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
          Descubra a elegância atemporal e o design sofisticado da Sara Business. 
          Peças exclusivas para mulheres que lideram.
        </p>
        <button 
          onClick={() => document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gold-500 text-black px-10 py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300"
        >
          Ver Coleção
        </button>
      </div>
    </section>
  );
};

export default Hero;