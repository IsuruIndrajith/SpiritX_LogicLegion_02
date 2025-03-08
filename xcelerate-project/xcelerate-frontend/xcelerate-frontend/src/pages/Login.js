import React, { useState } from "react";  
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image1 from '../images/1.png';
import "../styles/Home.css";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", SId: "" });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/login.php', formData);
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('team', JSON.stringify(response.data.team));
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        if (response.data.user.is_admin === 1) {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError(response.data.error || 'Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-56 bg-[#F8F6F4] py-10 h-[90%]">
      <div className="flex w-full max-w-4xl bg-[#D2F9FA] shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image1})` }}></div>
        <div className="w-full md:w-1/2 p-14 flex flex-col items-center">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full max-w-sm bg-[#B8EEFB] p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
            <label className="block text-gray-700 text-left">Email:</label>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mt-2" required />
            <label className="block text-gray-700 mt-4 text-left">Password:</label>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mt-2" required />
            <div className="text-left mt-4">
              <Link to="/forgot-password" className="hover:underline">Forgot Password?</Link>
            </div>
            <button type="submit" disabled={loading} className="w-[30%] mt-6 py-1 bg-[#27D5E5] rounded hover:bg-[#1CB8CC] disabled:opacity-50">
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-center text-gray-600 mt-4">or continue with</p>
            <p className="text-center text-gray-700 mt-6">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
