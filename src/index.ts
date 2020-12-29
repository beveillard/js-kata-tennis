const deuce = "Deuce";
const advantage1 = "Advantage player 1";
const advantage2 = "Advantage player 2";
const winner1 = "Player 1 wins the game";
const winner2 = "Player 2 wins the game";
const separator = " - ";
const pointsList = ["0", "15", "30", "40"];

export function tennis(score, winner) {

  score[winner]++;
  return [score, displayScore(score)];

}

export function displayScore(score) {

  if (score[0] < 3) {
    if (score[1] > 3) return winner2;
    return displayBasicScore(score);
  }
  if (score[1] < 3) {
    if (score[0] > 3) return winner1;
    return displayBasicScore(score);
  }
  if (score[0] === score[1]) return deuce;
  if (score[0] === score[1] + 1) return advantage1;
  if (score[1] === score[0] + 1) return advantage2;
  if (score[0] === score[1] + 2) return winner1;
  if (score[1] === score[0] + 2) return winner2;

}

export function displayBasicScore(score) {

  return pointsList[score[0]] + separator + pointsList[score[1]];

}
