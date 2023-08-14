import teams from '../Team json/team.js';

document.addEventListener('DOMContentLoaded', function () {
  const teamCardsDiv = document.getElementById('teamCards');

  // Function to generate a team card element
  function generateTeamCard(team) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');

    // Build the team card content
    teamCard.innerHTML = `
      <img src="${team.icon}" alt="${team.name}">
      <h3>${team.Fullname}</h3>
      <p>Total Players: ${team.totalPlayers}</p>
      <p>Top Batsman: ${team.topBatsman}</p>
      <p>Top Bowler: ${team.topBowler}</p>
      <p>Championships: ${team.championshipCount}</p>
    `;

    return teamCard;
  }

  // Display initial team cards
  teams.forEach(team => {
    const teamCard = generateTeamCard(team);
    teamCardsDiv.appendChild(teamCard);
  });

  const addForm = document.getElementById('addForm');
  addForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const entityType = addForm.entityType.value;

    if (entityType === 'team') {
      const newTeam = {
        id: teams.length,
        name: addForm.name.value,
        icon: addForm.iconURL.value,
        totalPlayerswait: addForm.totalPlayer.value,
        topBatsman: addForm.topBatsman.value,
        topBowler: addForm.topBowler.value,
        championshipCount: addForm.chompionship.value,
        // icon: addForm.iconURL.value,
        players: [],
      };
      teams.push(newTeam);
      localStorage.setItem('teamsData', JSON.stringify(teams));

      // Generate and append the new team card
      const newTeamCard = generateTeamCard(newTeam);
      teamCardsDiv.appendChild(newTeamCard);
    } else if (entityType === 'player') {
      
    }
  });
});
