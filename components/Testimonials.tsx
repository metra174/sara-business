import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gold-400">O que dizem nossas clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-gray-900 p-8 rounded-sm relative border border-gray-800 hover:border-gold-500 transition-colors duration-300">
              <Quote className="text-gold-500 mb-4 opacity-50" size={32} />
              <p className="text-gray-300 italic mb-6">"{item.text}"</p>
              <div>
                <h4 className="font-bold text-white">{item.name}</h4>
                <span className="text-xs uppercase tracking-wider text-gold-400">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;