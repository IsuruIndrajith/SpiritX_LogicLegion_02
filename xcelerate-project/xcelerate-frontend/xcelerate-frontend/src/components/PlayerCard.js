import React from 'react';

const PlayerCard = ({ player, inTeam, onAddPlayer }) => {
  const getPositionName = (posCode) => {
    const positions = {
      'GK': 'Goalkeeper',
      'DEF': 'Defender',
      'MID': 'Midfielder',
      'FWD': 'Forward'
    };
    return positions[posCode] || posCode;
  };
  
  const getPositionColor = (posCode) => {
    const colors = {
      'GK': 'bg-yellow-100',
      'DEF': 'bg-blue-100',
      'MID': 'bg-green-100',
      'FWD': 'bg-red-100'
    };
    return colors[posCode] || 'bg-gray-100';
  };
  
  const formatPrice = (price) => {
    return `£${price}m`;
  };

  return (
    <div className={`border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg ${getPositionColor(player.position)}`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-gray-700 text-white rounded">
            {getPositionName(player.position)}
          </span>
          <span className="text-xs font-semibold px-2 py-1 bg-blue-600 text-white rounded">
            {formatPrice(player.price)}
          </span>
        </div>
        
        <div className="flex items-center mb-4">
          {player.image_url ? (
            <img 
              src={player.image_url} 
              alt={player.name} 
              className="w-10 h-10 rounded-full mr-3"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
              <span className="text-gray-600 font-bold">
                {player.name.charAt(0)}
              </span>
            </div>
          )}
          
          <div>
            <h3 className="font-bold text-gray-800">{player.name}</h3>
            <p className="text-sm text-gray-600">{player.team}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-center">
          <div className="bg-white p-1 rounded shadow-sm">
            <p className="text-xs text-gray-500">Points</p>
            <p className="font-bold">{player.points}</p>
          </div>
          <div className="bg-white p-1 rounded shadow-sm">
            <p className="text-xs text-gray-500">Goals</p>
            <p className="font-bold">{player.goals || 0}</p>
          </div>
          {player.position !== 'GK' ? (
            <>
              <div className="bg-white p-1 rounded shadow-sm">
                <p className="text-xs text-gray-500">Assists</p>
                <p className="font-bold">{player.assists || 0}</p>
              </div>
              <div className="bg-white p-1 rounded shadow-sm">
                <p className="text-xs text-gray-500">Selected</p>
                <p className="font-bold">{player.selection_percentage || 0}%</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white p-1 rounded shadow-sm">
                <p className="text-xs text-gray-500">Clean Sheets</p>
                <p className="font-bold">{player.clean_sheets || 0}</p>
              </div>
              <div className="bg-white p-1 rounded shadow-sm">
                <p className="text-xs text-gray-500">Selected</p>
                <p className="font-bold">{player.selection_percentage || 0}%</p>
              </div>
            </>
          )}
        </div>
        
        <button 
          onClick={onAddPlayer}
          disabled={inTeam}
          className={`w-full py-2 rounded font-semibold ${
            inTeam 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {inTeam ? 'In Your Team' : 'Add to Team'}
        </button>
        </div>
        </div>
    );
}

export default PlayerCard;

