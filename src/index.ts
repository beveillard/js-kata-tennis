export enum WINNER {
  PLAYER_1,
  PLAYER_2,
}

export const MESSAGE = {
  DEUCE: "Deuce",
  ADVANTAGE_PLAYER_1: "Advantage player 1",
  ADVANTAGE_PLAYER_2: "Advantage player 2",
  PLAYER_1_WINS: "Player 1 wins",
  PLAYER_2_WINS: "Player 2 wins",
  ERROR: "Error",
}

const SEPARATOR = " - ";
const BASIC_SCORES = ["0", "15", "30", "40"];

export class Score {
  scorePlayer1: number;
  scorePlayer2: number;
}

export function tennis({ scorePlayer1: p1, scorePlayer2: p2 }: Score, winner: WINNER): Score {

  return (winner === WINNER.PLAYER_1) ? { scorePlayer1: p1 + 1, scorePlayer2: p2 } : { scorePlayer1: p1, scorePlayer2: p2 + 1 };

}

export function displayScore({ scorePlayer1: p1, scorePlayer2: p2 }: Score): string {

  if (p1 < 3) {
    if (p2 > 3) return MESSAGE.PLAYER_2_WINS;
    return displayBasicScore({ scorePlayer1: p1, scorePlayer2: p2 });
  }
  if (p2 < 3) {
    if (p1 > 3) return MESSAGE.PLAYER_1_WINS;
    return displayBasicScore({ scorePlayer1: p1, scorePlayer2: p2 });
  }
  if (p1 === p2) return MESSAGE.DEUCE;
  if (p1 === p2 + 1) return MESSAGE.ADVANTAGE_PLAYER_1;
  if (p2 === p1 + 1) return MESSAGE.ADVANTAGE_PLAYER_2;
  if (p1 === p2 + 2) return MESSAGE.PLAYER_1_WINS;
  if (p2 === p1 + 2) return MESSAGE.PLAYER_2_WINS;
  return MESSAGE.ERROR;
}

export function displayBasicScore({ scorePlayer1: p1, scorePlayer2: p2 }: Score) {

  return BASIC_SCORES[p1] + SEPARATOR + BASIC_SCORES[p2];

}
