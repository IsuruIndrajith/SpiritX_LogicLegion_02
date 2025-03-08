// src/api.js
export const fetchPlayers = async () => {
    const response = await fetch("http://localhost/xcelerate-backend/api/players.php");
    if (!response.ok) {
      throw new Error("Failed to fetch players");
    }
    return response.json();
  };
  
  export const fetchPlayerDetails = async (id) => {
    const response = await fetch(`http://localhost/xcelerate-backend/api/player_details.php?id=${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch player details");
    }
    return response.json();
  };