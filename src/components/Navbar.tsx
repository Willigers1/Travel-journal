import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Compass } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Compass className="mr-2" /> Travel Journal
          </Link>
          <div className="space-x-4">
            {user ? (
              <>
                <Link to="/" className="hover:text-blue-200">Feed</Link>
                <Link to="/post/new" className="hover:text-blue-200">New Post</Link>
                <Link to="/profile" className="hover:text-blue-200">Profile</Link>
                <button onClick={logout} className="hover:text-blue-200">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-200">Login</Link>
                <Link to="/register" className="hover:text-blue-200">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;