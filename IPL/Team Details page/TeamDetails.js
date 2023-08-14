
import teams from '../Team json/team.js';

const urlParams = new URLSearchParams(window.location.search);
const selectedTeamCode = urlParams.get("team"); // Get the selected team code from the URL parameter

const storedTeamsData = localStorage.getItem("teamsData");
const storedTeams = storedTeamsData ? JSON.parse(storedTeamsData) : [];

const selectedTeam = storedTeams.find((team) => team.name === selectedTeamCode);



if (selectedTeam) {
  const teamIcon = document.querySelector(".team-icon");
  teamIcon.src = selectedTeam.icon;

  const teamName = document.querySelector(".team-name");
  teamName.textContent = selectedTeam.Fullname;

  const playerCount = document.querySelector(".player-count");
  playerCount.textContent = `Total Players: ${selectedTeam.totalPlayers}`;

  const topBatsman = document.querySelector(".top-batsman");
  topBatsman.textContent = `Top Batsman: ${selectedTeam.topBatsman}`;

  const topBowler = document.querySelector(".top-bowler");
  topBowler.textContent = `Top Bowler: ${selectedTeam.topBowler}`;

  const championshipCount = document.querySelector(".championship-count");
  championshipCount.textContent = `Championships Won: ${selectedTeam.championshipCount}`;

  // Populate the player cards using a loop
  const cardGrid = document.querySelector(".card-grid");
  for (let i = 0; i < selectedTeam.players.length; i++) {
    const playerCard = createPlayerCard(selectedTeam.players[i]);
    cardGrid.appendChild(playerCard);
  }
}

function createPlayerCard(player) {
  const card = document.createElement("div");
  card.classList.add("player-card");

  const playerImage = document.createElement("img");
  playerImage.src = player.img;
  playerImage.alt = `${player.name}'s Image`;
  playerImage.classList.add("player-image");

  const playerName = document.createElement("h3");
  playerName.textContent = player.name;

  const playerRole = document.createElement("p");
  playerRole.textContent = `Role: ${player.role}`;

  const playerCountry = document.createElement("p");
  playerCountry.textContent = `Country: ${player.country}`;

  card.appendChild(playerImage);
  card.appendChild(playerName);
  card.appendChild(playerRole);
  card.appendChild(playerCountry);

  card.addEventListener("click", () => {
    window.location.href = `/IPL/Player%20Profile/profile.html?team=${selectedTeamCode}&playerId=${player.id}`;
  });
  

  return card;
}
