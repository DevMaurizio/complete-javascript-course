var averageScoreTeamJohn = (89 + 1 + 1) / 3;
var averageScoreTeamMike = (116, 94, 123) / 3;
var averageScoreTeamMary = (97, 134, 200) / 3;

switch(true) {
    case averageScoreTeamMike > averageScoreTeamJohn && averageScoreTeamMike > averageScoreTeamMary:
        console.log('Team Mike is the winner with an average score of: ' + averageScoreTeamMike);
        break;
    case averageScoreTeamJohn > averageScoreTeamMike && averageScoreTeamJohn > averageScoreTeamMary:
        console.log('Team John is the winner with an average score of: ' + averageScoreTeamJohn);
        break;
    case averageScoreTeamMary > averageScoreTeamMike && averageScoreTeamMary > averageScoreTeamJohn:
        console.log('Team Mary is the winner with an average score of: ' + averageScoreTeamMary);
        break;
    default:
        console.log('there is a draw');
        break;
}