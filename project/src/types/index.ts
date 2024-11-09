export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  text: string;
  date: string;
  helpful: number;
  notHelpful: number;
}

export interface Comment {
  id: string;
  reviewId: string;
  userId: string;
  text: string;
  date: string;
}