export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  quantity: number;
}

export interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  location: string;
}