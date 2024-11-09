import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Star } from 'lucide-react';
import { useData } from '../context/DataContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { reviews } = useData();
  const productReviews = reviews.filter((r) => r.productId === product.id);
  const avgRating =
    productReviews.reduce((acc, review) => acc + review.rating, 0) /
    productReviews.length;

  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.category}</p>
        <div className="mt-2 flex items-center space-x-2">
          <div className="flex items-center">
            <Star
              className={`h-5 w-5 ${
                avgRating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
            />
            <span className="ml-1 text-sm text-gray-600">
              {avgRating ? avgRating.toFixed(1) : 'No reviews'}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            ({productReviews.length} reviews)
          </span>
        </div>
        <div className="mt-2 text-lg font-bold text-indigo-600">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </Link>
  );
}