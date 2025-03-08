import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PlayerCard from '../components/PlayerCard';
import TeamList from '../components/TeamList';

const Team = () => {
  const [players, setPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    position: '',
    search: '',
    sort: 'points',
    order: 'desc'
  });
  const [pagination, setPagination] = useState({
    current: 1,
    total: 1,
    limit: 20
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchTeam();
    fetchPlayers();
  }, [filters, pagination.current, navigate]);

  const fetchTeam = async () => {
    try {
      const team = JSON.parse(localStorage.getItem('team'));
      if (!team) {
        setError('Team data not found');
        return;
      }

      const response = await axios.get('/getPlayers.php', {
        params: { team_id: team.id },
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      if (response.data.success) {
        setTeamPlayers(response.data.players.filter(player => player.in_team === true) || []);
      } else {
        setError(response.data.error || 'Failed to fetch team data');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error connecting to server');
      console.error('Fetch team error:', err);
    }
  };

  const fetchPlayers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/getPlayers.php', {
        params: {
          position: filters.position,
          search: filters.search,
          sort: filters.sort,
          order: filters.order,
          page: pagination.current,
          limit: pagination.limit
        },
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      if (response.data.success) {
        setPlayers(response.data.players);
        setPagination(response.data.pagination);
      } else {
        setError(response.data.error || 'Failed to fetch players');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error connecting to server');
      console.error('Fetch players error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPlayer = async (playerId) => {
    try {
      const response = await axios.post('/addPlayer.php', 
        { player_id: playerId },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );

      if (response.data.success) {
        setTeamPlayers(response.data.team);
        fetchPlayers();
      } else {
        setError(response.data.error || 'Failed to add player');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error connecting to server');
      console.error('Add player error:', err);
    }
  };

  const handleRemovePlayer = async (playerId) => {
    try {
      const response = await axios.post('/removePlayer.php', 
        { player_id: playerId },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );

      if (response.data.success) {
        setTeamPlayers(response.data.team);
        fetchPlayers();
      } else {
        setError(response.data.error || 'Failed to remove player');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error connecting to server');
      console.error('Remove player error:', err);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
    setPagination({
      ...pagination,
      current: 1
    });
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.total) {
      setPagination({
        ...pagination,
        current: newPage
      });
    }
  };

  const isPlayerInTeam = (playerId) => {
    return teamPlayers.some(player => player.id === playerId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Your Team</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
          <button className="float-right" onClick={() => setError('')}>×</button>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4">Your Team</h2>
            <TeamList players={teamPlayers} onRemovePlayer={handleRemovePlayer} />
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Available Players</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <select
                  name="position"
                  value={filters.position}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">All Positions</option>
                  <option value="GK">Goalkeeper</option>
                  <option value="DEF">Defender</option>
                  <option value="MID">Midfielder</option>
                  <option value="FWD">Forward</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Player or team name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  name="sort"
                  value={filters.sort}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="points">Points</option>
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                  <option value="team">Team</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                <select
                  name="order"
                  value={filters.order}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>
            </div>
            
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-4">Loading players...</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {players.map(player => (
                    <PlayerCard
                      key={player.id}
                      player={player}
                      inTeam={isPlayerInTeam(player.id)}
                      onAddPlayer={() => handleAddPlayer(player.id)}
                    />
                  ))}
                </div>
                
                {pagination.total > 1 && (
                  <div className="flex justify-center mt-6">
                    <nav className="flex items-center">
                      <button
                        onClick={() => handlePageChange(pagination.current - 1)}
                        disabled={pagination.current === 1}
                        className="px-3 py-1 rounded-md border border-gray-300 mr-2 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      
                      <span className="px-3 py-1">
                        Page {pagination.current} of {pagination.total}
                      </span>
                      
                      <button
                        onClick={() => handlePageChange(pagination.current + 1)}
                        disabled={pagination.current === pagination.total}
                        className="px-3 py-1 rounded-md border border-gray-300 ml-2 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;