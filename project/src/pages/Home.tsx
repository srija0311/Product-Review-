import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import ProductCard from '../components/ProductCard';
import { ShoppingBag, Star, Users } from 'lucide-react';

export default function Home() {
  const { products, reviews } = useData();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to ReviewHub
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Discover honest product reviews from real users. Share your
              experiences and help others make informed decisions.
            </p>
            <div className="mt-10">
              <Link
                to="/products"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ShoppingBag className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">
              {products.length}
            </div>
            <div className="text-gray-600">Products Listed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">
              {reviews.length}
            </div>
            <div className="text-gray-600">Reviews Written</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900">1,000+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}