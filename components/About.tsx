import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-gold-400 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Sobre a Sara Business" 
                className="relative z-10 w-full shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif mb-6">Sobre a Sara Business</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nascida da paixão pela moda e pelo empoderamento feminino, a Sara Business 
              traz uma curadoria de peças que unem sofisticação, conforto e tendências globais.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Acreditamos que a roupa é uma forma de expressão. Nossa missão é oferecer 
              looks que inspirem confiança e destaquem a beleza única de cada mulher, 
              seja no ambiente corporativo ou em momentos especiais.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-serif text-gold-500">5k+</span>
                <span className="text-sm uppercase tracking-wide text-gray-500">Clientes Felizes</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-gold-500">100%</span>
                <span className="text-sm uppercase tracking-wide text-gray-500">Qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;