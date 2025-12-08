import { Product } from './types';

export const STORE_PHONE_NUMBER = "244955159730"; // Formato internacional para link do WhatsApp

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pasta Executiva Charme",
    price: 6000,
    image: "https://i.imgur.com/GGk3XtL.jpg",
    category: "Bolsas",
    colors: ["Preto", "Bege", "Rosa", "Azul", "Vermelho"]
  },
  {
    id: 2,
    name: "Conjunto Alfaiataria Chic",
    price: 10000,
    image: "https://i.imgur.com/kEms9IP.jpg",
    category: "Conjuntos",
    colors: ["Preto", "Branco", "Verde", "Laranja", "Rosa"]
  },
  {
    id: 3,
    name: "Pasta Lady Luxo",
    price: 8000,
    image: "https://i.imgur.com/jsyx3NQ.jpg",
    category: "Bolsas",
    colors: ["Preto", "Castanho", "Creme"]
  },
  {
    id: 4,
    name: "Bolsa Tiracolo Style",
    price: 6000,
    image: "https://i.imgur.com/f6SlmAC.jpg",
    category: "Bolsas",
    colors: ["Preto", "Branco", "Bege"]
  },
  {
    id: 5,
    name: "Mochila Urbana",
    price: 6000,
    image: "https://i.imgur.com/uazyeaZ.jpg",
    category: "Mochilas",
    colors: ["Preto", "Cinza", "Rosa"]
  },
  {
    id: 6,
    name: "Pasta Business",
    price: 6000,
    image: "https://i.imgur.com/JWYaSv5.jpg",
    category: "Bolsas",
    colors: ["Preto", "Vermelho", "Azul", "Bege"]
  },
  {
    id: 7,
    name: "Bolsa de Mão Clássica",
    price: 6000,
    image: "https://i.imgur.com/cnymT5X.jpg",
    category: "Bolsas",
    colors: ["Preto", "Branco", "Nude"]
  },
  {
    id: 8,
    name: "Bolsa Ombro Premium",
    price: 8000,
    image: "https://i.imgur.com/ZIHeu9O.jpg",
    category: "Bolsas",
    colors: ["Preto", "Castanho", "Vinho"]
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