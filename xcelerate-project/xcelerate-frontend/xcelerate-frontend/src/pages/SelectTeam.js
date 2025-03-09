import React, { useState, useEffect } from "react";

function SelectTeam() {
  const [category, setCategory] = useState("Batsman");
  const [players, setPlayers] = useState([]);
  const [budget, setBudget] = useState(9000000);

  useEffect(() => {
    const fetchPlayersByCategory = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1/xcelerate-backend/api/players_by_category.php?category=${category}`
        );
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayersByCategory();
  }, [category]);

  const handleAddToTeam = (player) => {
    if (budget >= player.budget) {
      setBudget((prevBudget) => prevBudget - player.budget);
      alert(`${player.name} added to team!`);
    } else {
      alert("Not enough budget!");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Select Your Team</h2>
      <div className="mb-4">
        <label className="mr-2">Select Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
          <option value="All-rounder">All-rounder</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {players.map((player) => (
          <div key={player.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{player.name}</h3>
            <p>{player.university}</p>
            <p>Budget: Rs. {player.budget}</p>
            <button
              onClick={() => handleAddToTeam(player)}
              className="mt-2 bg-blue-600 text-white p-2 rounded"
            >
              Add to Team
            </button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <p>Remaining Budget: Rs. {budget}</p>
      </div>
    </div>
  );
}

export default SelectTeam;
