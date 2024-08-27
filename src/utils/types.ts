// types.ts

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  rating: number;
  reviews: {
    author: string;
    content: string;
    rating: number;
  }[];
  featured: boolean;
}
