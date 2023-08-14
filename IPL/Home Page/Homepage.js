

import teams from '../Team json/team.js';

const teamCardContainer = document.getElementById("teamCardContainer");

const storedTeamsData = localStorage.getItem('teamsData');
const storedTeams = storedTeamsData ? JSON.parse(storedTeamsData) : [];

// Call the function to render teams in columns
renderTeamsInColumns();


function renderTeamsInColumns() {
  const halfLength = Math.ceil(storedTeams.length / 2);

  for (let i = 0; i < halfLength; i++) {
    teamCardContainer.appendChild(createTeamCard(storedTeams[i]));
  }

  for (let i = halfLength; i < storedTeams.length; i++) {
    teamCardContainer.appendChild(createTeamCard(storedTeams[i]));
  }
}

function createTeamCard(team) {
  const teamCard = document.createElement("div");
  teamCard.classList.add("team-card");
  teamCard.setAttribute("data-team-code", team.name);
  teamCard.addEventListener("click", function () {
    redirectToTeamDetails(team.name);
  });

  const logo = document.createElement("img");
  logo.src = team.icon;
  logo.alt = `${team.name} Logo`;
  logo.classList.add("team-logo");

  const teamNameBeforeHover = document.createElement("h3");
  teamNameBeforeHover.textContent = team.name;

  const teamNameAfterHover = document.createElement("h3");
  teamNameAfterHover.textContent = team.Fullname;
  teamNameAfterHover.classList.add("team-name-hover");

  const totalPlayers = document.createElement("p");
  totalPlayers.textContent = `Total Players: ${team.totalPlayers}`;

  const championshipCount = document.createElement("p");
  championshipCount.textContent = `Championships: ${team.championshipCount}`;


  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");
  detailsContainer.appendChild(teamNameAfterHover);
  detailsContainer.appendChild(totalPlayers);
  detailsContainer.appendChild(championshipCount);
  // detailsContainer.appendChild(owner);

  teamCard.appendChild(logo);
  teamCard.appendChild(teamNameBeforeHover);
  teamCard.appendChild(detailsContainer);

  return teamCard;
}


function redirectToTeamDetails(teamCode) {
  window.location.href = `/IPL/Team%20Details%20page/TeamDetails.html?team=${teamCode}`;
}

document.getElementById("homeMenuItem").addEventListener("click", function() {
  // Replace "TeamDetails.html" with your actual homepage URL
  window.location.href = "Home.html";
});

const addNewButton = document.getElementById('addNewButton');

addNewButton.addEventListener('click', () => {
  // Redirect to the add new page
  window.location.href = '/addTeam.html';
});
