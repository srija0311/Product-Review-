import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8" />
              <span className="font-bold text-xl">ReviewHub</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link
                to="/products"
                className={`text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/products' ? 'bg-indigo-700' : ''
                }`}
              >
                Products
              </Link>
              {user?.role === 'admin' && (
                <>
                  <Link
                    to="/admin/dashboard"
                    className={`text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === '/admin/dashboard' ? 'bg-indigo-700' : ''
                    }`}
                  >
                    Admin Dashboard
                  </Link>
                  <Link
                    to="/admin/products"
                    className={`text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === '/admin/products' ? 'bg-indigo-700' : ''
                    }`}
                  >
                    Manage Products
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-1 text-white">
                  <User className="h-5 w-5" />
                  <span>{user.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-white hover:text-gray-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}