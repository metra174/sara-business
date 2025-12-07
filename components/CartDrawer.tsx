import React, { useState } from 'react';
import { X, Trash2, Send, ShoppingBag } from 'lucide-react';
import { CartItem, CustomerDetails } from '../types';
import { STORE_PHONE_NUMBER } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateColor: (index: number, newColor: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemoveItem,
  onUpdateColor
}) => {
  const [details, setDetails] = useState<CustomerDetails>({
    fullName: '',
    phone: '',
    email: '',
    location: ''
  });

  const total = items.reduce((sum, item) => sum + item.product.price, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) return;

    // Build the message
    let message = `*NOVO PEDIDO - SARA BUSINESS*\n\n`;
    message += `*Cliente:* ${details.fullName}\n`;
    message += `*Telefone:* ${details.phone}\n`;
    message += `*Email:* ${details.email}\n`;
    message += `*Local de Entrega:* ${details.location}\n\n`;
    message += `*PEDIDO:*\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   Cor: ${item.selectedColor}\n`;
      message += `   Preço: ${item.product.price.toLocaleString('pt-AO')} Kzs\n\n`;
    });

    message += `*TOTAL: ${total.toLocaleString('pt-AO')} Kzs*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div 
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-black text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-gold-500" />
            <h2 className="text-xl font-serif">Seu Carrinho</h2>
          </div>
          <button onClick={onClose} className="hover:text-gold-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* Items List */}
          {items.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <p>Seu carrinho está vazio.</p>
              <button 
                onClick={onClose} 
                className="mt-4 text-gold-600 font-bold hover:underline"
              >
                Voltar às compras
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 border-b border-gray-100 pb-4">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-20 h-24 object-cover rounded-sm"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{item.product.name}</h3>
                    <p className="text-gold-600 font-medium">{item.product.price.toLocaleString('pt-AO')} Kzs</p>
                    
                    {/* Color Selector inside Cart */}
                    <div className="mt-2">
                      <label className="text-xs text-gray-500 block mb-1">Cor:</label>
                      <select 
                        value={item.selectedColor}
                        onChange={(e) => onUpdateColor(index, e.target.value)}
                        className="text-sm border border-gray-300 rounded px-2 py-1 w-full max-w-[120px] focus:border-gold-500 outline-none"
                      >
                        {item.product.colors.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(index)}
                    className="text-gray-400 hover:text-red-500 self-start p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              
              <div className="flex justify-between items-center pt-2 border-t border-black">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-xl text-gold-600">{total.toLocaleString('pt-AO')} Kzs</span>
              </div>
            </div>
          )}

          {/* Checkout Form */}
          {items.length > 0 && (
            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4 pt-4">
              <h3 className="font-serif text-lg border-b pb-2 mb-4">Dados para Entrega</h3>
              
              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1">Nome Completo *</label>
                <input 
                  required
                  type="text"
                  name="fullName"
                  value={details.fullName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 focus:border-gold-500 outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1">Telefone (WhatsApp) *</label>
                <input 
                  required
                  type="tel"
                  name="phone"
                  value={details.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 focus:border-gold-500 outline-none transition-colors"
                  placeholder="+244 9XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1">E-mail *</label>
                <input 
                  required
                  type="email"
                  name="email"
                  value={details.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 focus:border-gold-500 outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1">Localização para Entrega *</label>
                <input 
                  required
                  type="text"
                  name="location"
                  value={details.location}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 focus:border-gold-500 outline-none transition-colors"
                  placeholder="Bairro, Rua, Ponto de Referência"
                />
              </div>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <button 
              type="submit"
              form="checkout-form"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-none uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Send size={20} />
              Concluir Pedido no WhatsApp
            </button>
            <p className="text-[10px] text-center text-gray-500 mt-3">
              Ao clicar, você será redirecionado para o WhatsApp para finalizar o pagamento e combinar a entrega.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;