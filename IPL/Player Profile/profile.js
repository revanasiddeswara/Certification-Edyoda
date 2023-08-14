

  import teams from '../Team json/team.js';

document.getElementById("hamburgerButton").addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
  });
  
const playerList = document.querySelector('.player-list');

// Get the URL parameters for team and playerId
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamName = urlParams.get('team');
const playerId = urlParams.get('playerId');

// Find the team in the teams data based on the team name
const team = teams.find(team => team.name === teamName);

if (team) {
  const player = team.players.find(player => player.id === playerId);

  if (player) {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');

    playerCard.innerHTML = `
      <img src="${player.img}" alt="${player.name}">
      

      <div class="player-details">
  <h2 class="player-name">${player.name}</h2>
  <table class="player-table">
    <tr>
      <td>Role</td>
      <td>${player.role}</td>
    </tr>
    <tr>
      <td>Team</td>
      <td>${team.name}</td>
    </tr>
    <tr>
      <td>Country</td>
      <td>${player.country}</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>${player.price}</td>
    </tr>
    <tr>
      <td>Is Playing</td>
      <td>${player.isPlaying}</td>
    </tr>
  </table>
</div>

    `;

    playerList.appendChild(playerCard);
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Player not found';
    playerList.appendChild(errorMessage);
  }
} else {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Team not found';
  playerList.appendChild(errorMessage);
}

  