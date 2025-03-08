import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Player Management System</h1>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded">
              <Link to="/Login" className="text-blue-500 hover:underline">Login</Link>
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded">
              <Link to="/register" className="text-blue-500 hover:underline">Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <section className="text-center my-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to the Player Management System!</h2>
          <p className="text-gray-700">This system helps you select players and build your own team.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Players</h3>
            <p className="text-gray-700">View all players and explore their details.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">View Players</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Create Teams</h3>
            <p className="text-gray-700">Create your own team and select players.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Create Teams</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
            <p className="text-gray-700">View scores of the top users.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Leaderboard</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg my-8">
          <h3 className="text-xl font-bold mb-4">Your Team Status</h3>
          <p className="text-gray-700">Remaining Budget: Rs. 4,500,000</p>
          <p className="text-gray-700">Team Completion: 5/11 Players</p>
        </div>
      </div>

      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>Contact: example@example.com | Facebook | Twitter</p>
      </footer>
    </div>
  );
}

export default App;