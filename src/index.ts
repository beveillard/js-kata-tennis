const deuce = "Deuce";
const advantage1 = "Advantage player 1";
const advantage2 = "Advantage player 2";
const winner1 = "Player 1 wins the game";
const winner2 = "Player 2 wins the game";
const separator = " - ";
const points40 = "40";
const pointsPlus = "+";
const pointsList = ["0", "15", "30", points40, pointsPlus];
const error = "*";

export function tennis(score, winner) {

  switch (winner) {
    case 1:
      return player1wins(score);
    case 2:
      return player2wins(score);
    default:
      return error;
  }

}

export function extractPoints1(score) {
  let index = score.indexOf(separator);

  return score.slice(0, index);
}

export function extractPoints2(score) {
  let index = score.indexOf(separator);

  return score.slice(index + 3);
}

export function incrementPoints(points) {

  for (let index = 0; index < (pointsList.length - 1); index++) {
    if (points === pointsList[index]) {
      return pointsList[++index];
    }
  }

  return error;
}

function player1wins(score) {

  switch (score) {
    case deuce:
      return advantage1;
    case advantage1:
      return winner1;
    case advantage2:
      return deuce;
    default:
      let points1 = incrementPoints(extractPoints1(score));
      let points2 = extractPoints2(score);
      return display(points1, points2);
  }

}

function player2wins(score) {

  switch (score) {
    case deuce:
      return advantage2;
    case advantage1:
      return deuce;
    case advantage2:
      return winner2;
    default:
      let points1 = extractPoints1(score);
      let points2 = incrementPoints(extractPoints2(score));
      return display(points1, points2);
  }

}

function display(points1, points2) {
  if ((points1 == points40) && (points2 == points40)) return deuce;
  if (points1 == pointsPlus) return winner1;
  if (points2 == pointsPlus) return winner2;

  return points1 + separator + points2;
}
