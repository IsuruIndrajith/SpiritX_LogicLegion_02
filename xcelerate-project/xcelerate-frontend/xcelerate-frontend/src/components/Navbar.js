import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const username = user.username || 'User';
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('team');
    navigate('/login');
  };
  
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/dashboard" className="text-xl font-bold flex items-center">
            <span className="text-blue-400">X</span>celerate
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-gray-700">Dashboard</Link>
            <Link to="/team" className="px-3 py-2 rounded hover:bg-gray-700">My Team</Link>
            {isAdmin && (
              <Link to="/admin" className="px-3 py-2 rounded hover:bg-gray-700">Admin</Link>
            )}
            
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 rounded hover:bg-gray-700 focus:outline-none"
              >
                <span className="mr-2">{username}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 z-10">
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex items-center px-3 py-2 rounded hover:bg-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-3 border-t border-gray-700">
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/team" 
              className="block px-3 py-2 rounded hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              My Team
            </Link>
            {isAdmin && (
              <Link 
                to="/admin" 
                className="block px-3 py-2 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            )}
            <button 
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;