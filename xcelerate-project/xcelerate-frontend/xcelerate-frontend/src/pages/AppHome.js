import React, { useState } from 'react';
import { Route, Routes} from 'react-router-dom';

// Dummy data for players (replace with API calls later)
const players = [
  { id: 1, name: 'Player 1', university: 'University A', category: 'Batsman', budget: 500000 },
  { id: 2, name: 'Player 2', university: 'University B', category: 'Bowler', budget: 400000 },
  // Add more players as needed
];

// Dummy data for teams (replace with API calls later)
const initialTeam = {
  players: [],
  budget: 9000000, // Initial budget
};

function AppHome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [team, setTeam] = useState(initialTeam); // Track user's team

  // Simulate login/logout
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Add a player to the team
  const addPlayerToTeam = (player) => {
    if (team.players.some((p) => p.id === player.id)) {
      alert('Player already in team!');
      return;
    }
    if (team.budget < player.budget) {
      alert('Not enough budget!');
      return;
    }
    setTeam({
      ...team,
      players: [...team.players, player],
      budget: team.budget - player.budget,
    });
  };

  // Remove a player from the team
  const removePlayerFromTeam = (player) => {
    setTeam({
      ...team,
      players: team.players.filter((p) => p.id !== player.id),
      budget: team.budget + player.budget,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Player Management System</h1>
          <div className="space-x-4">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded">
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className="bg-white text-blue-600 px-4 py-2 rounded">
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Dashboard team={team} removePlayerFromTeam={removePlayerFromTeam} />
              ) : (
                <Home />
              )
            }
          />
          <Route
            path="/players"
            element={<Players players={players} addPlayerToTeam={addPlayerToTeam} />}
          />
        </Routes>
      </div>

      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>Contact: example@example.com | Facebook | Twitter</p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Welcome to the Player Management System!</h2>
      <p className="text-gray-700">Please log in to manage your team.</p>
    </div>
  );
}

function Dashboard({ team, removePlayerFromTeam }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Your Dashboard</h2>
      <p className="text-gray-700">Team Status: {team.players.length}/11 players selected</p>
      <p className="text-gray-700">Remaining Budget: Rs. {team.budget}</p>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Your Team</h3>
        {team.players.length === 0 ? (
          <p>No players selected yet.</p>
        ) : (
          team.players.map((player) => (
            <div key={player.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <p>{player.name} - {player.university}</p>
              <button
                onClick={() => removePlayerFromTeam(player)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
function Players({ players, addPlayerToTeam }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Players</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((player) => (
          <div key={player.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{player.name}</h3>
            <p className="text-gray-700">{player.university}</p>
            <p className="text-gray-700">Category: {player.category}</p>
            <p className="text-gray-700">Budget: Rs. {player.budget}</p>
            <button
              onClick={() => addPlayerToTeam(player)}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Add to Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppHome;