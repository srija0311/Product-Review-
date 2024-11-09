import React from 'react';
import { format } from 'date-fns';
import { ThumbsUp, ThumbsDown, Star } from 'lucide-react';
import { Review, User } from '../types';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';

interface ReviewCardProps {
  review: Review;
  showProduct?: boolean;
}

export default function ReviewCard({ review, showProduct }: ReviewCardProps) {
  const { products, updateHelpful } = useData();
  const { user } = useAuth();
  const product = products.find((p) => p.productId === review.productId);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {format(new Date(review.date), 'MMM d, yyyy')}
          </span>
        </div>
        {showProduct && product && (
          <div className="text-sm font-medium text-indigo-600">
            {product.name}
          </div>
        )}
      </div>
      <p className="text-gray-700 mb-4">{review.text}</p>
      {user && (
        <div className="flex items-center space-x-4">
          <button
            onClick={() => updateHelpful(review.id, true)}
            className="flex items-center space-x-1 text-gray-600 hover:text-green-600"
          >
            <ThumbsUp className="h-5 w-5" />
            <span>{review.helpful}</span>
          </button>
          <button
            onClick={() => updateHelpful(review.id, false)}
            className="flex items-center space-x-1 text-gray-600 hover:text-red-600"
          >
            <ThumbsDown className="h-5 w-5" />
            <span>{review.notHelpful}</span>
          </button>
        </div>
      )}
    </div>
  );
}