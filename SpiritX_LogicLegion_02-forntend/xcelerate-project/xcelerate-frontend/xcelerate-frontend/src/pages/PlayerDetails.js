import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerDetails } from "../api";

function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const data = await fetchPlayerDetails(id);
        setPlayer(data);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };
    getPlayerDetails();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{player.name}</h2>
      <p>University: {player.university}</p>
      <p>Matches: {player.matches}</p>
      <p>Runs: {player.runs}</p>
      <p>Wickets: {player.wickets}</p>
    </div>
  );
}

export default PlayerDetails;