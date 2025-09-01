import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors">
            ChangeMakers
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li><Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors">Articles</Link></li>
          <li><Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors">Projects</Link></li>
          <li><Link to="/dashboard" className="text-gray-600 hover:text-blue-500 transition-colors">Dashboard</Link></li>
          <li><Link to="/login" className="text-gray-600 hover:text-blue-500 transition-colors">Login</Link></li>
          <li>
            <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
