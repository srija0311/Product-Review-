import { User, Product, Review, Comment } from '../types';

export const dummyUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: '2',
    username: 'john_doe',
    email: 'john@example.com',
    password: 'user123',
    role: 'user',
  },
];

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    price: 299.99,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health tracking features',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    price: 199.99,
  },
];

export const dummyReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: '2',
    rating: 5,
    text: 'Amazing sound quality and comfortable to wear!',
    date: '2024-03-15',
    helpful: 12,
    notHelpful: 2,
  },
];

export const dummyComments: Comment[] = [
  {
    id: '1',
    reviewId: '1',
    userId: '1',
    text: 'Thanks for the detailed review!',
    date: '2024-03-16',
  },
];