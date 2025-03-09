import React, { useEffect, useState } from "react";
import { fetchPlayers } from "../api";
import { Link } from "react-router-dom";

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    getPlayers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Players</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {players.map((player) => (
          <div key={player.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{player.name}</h3>
            <p>{player.university}</p>
            <Link
              to={`/players/${player.id}`}
              className="text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Players;