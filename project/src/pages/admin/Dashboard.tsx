import React from 'react';
import { useData } from '../../context/DataContext';
import { BarChart3, Package, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { products, reviews } = useData();

  const stats = [
    {
      title: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'text-blue-600',
      link: '/admin/products',
    },
    {
      title: 'Total Reviews',
      value: reviews.length,
      icon: Star,
      color: 'text-yellow-600',
      link: '/admin/reviews',
    },
    {
      title: 'Average Rating',
      value: (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length || 0).toFixed(1),
      icon: BarChart3,
      color: 'text-green-600',
      link: '/admin/analytics',
    },
    {
      title: 'Active Users',
      value: '1,000+',
      icon: Users,
      color: 'text-purple-600',
      link: '/admin/users',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.title}
            to={stat.link}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
            </div>
            <h3 className="text-gray-600 font-medium">{stat.title}</h3>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Products</h2>
          <div className="space-y-4">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/admin/products"
            className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
          >
            View all products →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            {reviews.slice(0, 5).map((review) => {
              const product = products.find((p) => p.id === review.productId);
              return (
                <div key={review.id} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{product?.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{review.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            to="/admin/reviews"
            className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
          >
            View all reviews →
          </Link>
        </div>
      </div>
    </div>
  );
}