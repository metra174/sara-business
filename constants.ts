import { Product } from './types';

export const STORE_PHONE_NUMBER = "244955159730"; // Formato internacional para link do WhatsApp

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Vestido Midi Elegance",
    price: 45000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    category: "Vestidos",
    colors: ["Preto", "Dourado", "Vermelho"]
  },
  {
    id: 2,
    name: "Blazer Alfaiataria Gold",
    price: 65000,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    category: "Casacos",
    colors: ["Preto", "Bege", "Branco"]
  },
  {
    id: 3,
    name: "Conjunto Seda Premium",
    price: 55000,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
    category: "Conjuntos",
    colors: ["Champagne", "Rose", "Preto"]
  },
  {
    id: 4,
    name: "Saia Lápis Clássica",
    price: 28000,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
    category: "Saias",
    colors: ["Preto", "Azul Marinho"]
  },
  {
    id: 5,
    name: "Camisa Social Seda",
    price: 35000,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop",
    category: "Blusas",
    colors: ["Branco", "Off-White", "Azul Claro"]
  },
  {
    id: 6,
    name: "Calça Pantalona Chic",
    price: 42000,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    category: "Calças",
    colors: ["Preto", "Caramelo", "Verde Oliva"]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Jéssica Paulo",
    text: "As roupas são lindas e o tecido é de muita qualidade. Chegou super rápido aqui no Talatona.",
    role: "Cliente VIP"
  },
  {
    id: 2,
    name: "Ana Miguel",
    text: "Elegância pura. As peças da Sara Business transformaram meu look de trabalho.",
    role: "Advogada"
  },
  {
    id: 3,
    name: "Carla Nunes",
    text: "Atendimento excelente pelo WhatsApp e embalagem impecável. Recomendo muito!",
    role: "Empresária"
  }
];