import teams from '../Team json/team.js';

const searchInput = document.getElementById('searchInput');
const playerProfilesDiv = document.getElementById('playerProfiles');

// Function to update player profiles based on search
function updatePlayerProfiles(searchQuery) {
  // Clear existing profiles
  playerProfilesDiv.innerHTML = '';
// Get the URL parameters for team and playerId
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamId = parseInt(urlParams.get('team'));
const playerId = urlParams.get('playerId');
  // Filter players whose names match the search query
  const filteredPlayers = teams.flatMap(team =>
    team.players.map(player => ({
      ...player,
      teamId: team.id // Add the teamId property
    }))
  ).filter(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()));
  console.log(`Team ID from URL: ${teamId}`);

// Find the team in the teams data based on the team ID
const team = teams.find(team => team.id === teamId);

  // Create and display profiles for filtered players
  filteredPlayers.forEach(player => {
    const playerProfile = document.createElement('div');
    playerProfile.className = 'player-profile';

    // Find the team information for the player
    const playerTeam = teams.find(team => team.id === player.teamId);

    // Build the player profile content
    playerProfile.innerHTML = `
      <img src="${player.img}" alt="${player.name}">
      <h3>${player.name}</h3>
      <p>Role: ${player.role}</p>
      <p>Team: ${playerTeam ? playerTeam.Fullname : 'Unknown Team'}</p>
      <p>Country: ${player.country}</p>
      <p>Price: ${player.price}</p>
      <p>Is Playing: ${player.isPlaying}</p>
    `;

    playerProfile.addEventListener('click', () => {
        // Redirect to the player detail page
        window.location.href = `/IPL/Player%20Profile/profile.html?team=${playerTeam.name}&playerId=${player.id}`;
      });
      
      

    // Append the player profile to the profiles div
    playerProfilesDiv.appendChild(playerProfile);
  });
}

// Listen for changes in the search input
searchInput.addEventListener('input', event => {
  const searchQuery = event.target.value;
  updatePlayerProfiles(searchQuery);
});

// Initial update of player profiles
updatePlayerProfiles('');
