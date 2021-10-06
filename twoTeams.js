/**
 * 
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.

  
  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  competitions  and results , respectively. The competitions  array has elements in the form of
  [homeTeam, awayTeam] , where each team is a string of at most 30
  characters representing the name of the team. The results  array
  contains information about the winner of each corresponding competition in the
  competitions  array. Specifically, results[i]  denotes
  the winner of competitions[i] , where a 1 in the results array means that the home team
  in the corresponding competition won and a 0 means that the away team won.
 */

//competitions [homeTeam,awayTeam]
//results a 1 homeTeam a 0 awayTeam
function tournamentWinner(competitions, results) {
  // Write your code here.
  const scores = {};
  let bestTeam = '';
  for (let idx = 0; idx < results.length; idx++) {
    const result = results[idx];
    const homeTeam = competitions[idx][0];
    const awayTeam = competitions[idx][1];
    const winner = competitions[idx][result ? 0 : 1];
    if (idx === 0) {
      bestTeam = winner;
    }
    if (!(homeTeam in scores)) {
      scores[homeTeam] = 0;
    }
    if (!(awayTeam in scores)) {
      scores[awayTeam] = 0;
    }
    scores[winner] += 3;
    if (scores[winner] > scores[bestTeam]) {
      bestTeam = winner;
    }
  }

  return bestTeam;
}
