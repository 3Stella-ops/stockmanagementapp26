import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';

interface RootState {
  auth: {
    token: string | null;
    user: any;
  };
}

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-bold text-xl">Stock Management</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-300">Dashboard</Link>
            <Link to="/inventory" className="hover:text-gray-300">Inventory</Link>
            <Link to="/reports" className="hover:text-gray-300">Reports</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;