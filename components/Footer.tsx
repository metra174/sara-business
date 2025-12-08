import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-black pt-16 pb-8 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="https://i.imgur.com/p8eVZLG.png" 
              alt="Sara Business" 
              className="h-14 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Moda feminina com elegância, sofisticação e estilo. 
              Transformando guarda-roupas e elevando a autoestima.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors border border-gray-800">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors border border-gray-800">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold uppercase tracking-wider mb-6 text-gold-400">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 mt-1 shrink-0" />
                <span>Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <span>+244 955 159 730</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <span>contato@sarabusiness.com</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold uppercase tracking-wider mb-6 text-gold-400">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#inicio" className="hover:text-gold-500 transition-colors">Início</a></li>
              <li><a href="#colecao" className="hover:text-gold-500 transition-colors">Coleção</a></li>
              <li><a href="#sobre" className="hover:text-gold-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="hover:text-gold-500 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold uppercase tracking-wider mb-6 text-gold-400">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-4">Receba novidades e ofertas exclusivas.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full p-3 bg-gray-900 border border-gray-800 text-white focus:border-gold-500 outline-none placeholder-gray-600"
              />
              <button className="bg-gold-500 text-black uppercase text-xs font-bold py-3 hover:bg-white transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Sara Business. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;