import {
  WINNER,
  tennis,
  displayScore,
  displayBasicScore,
  MESSAGE,
} from ".";

describe("Test of displayBasicScore()", function () {

  it("Should display 15 - 30", function () {
    // Given
    const score = { scorePlayer1: 1, scorePlayer2: 2 };
    // When
    const print = displayBasicScore(score);
    //Then
    expect(print).toEqual("15 - 30");
  });

});

describe("Test of displayScore()", function () {

  it("Should display 15 - 40", function () {
    // Given
    const score = { scorePlayer1: 1, scorePlayer2: 3 };
    // When
    const print = displayScore(score);
    //Then
    expect(print).toEqual("15 - 40");
  });

  it("Should display player 2 wins", function () {
    // Given
    const score = { scorePlayer1: 1, scorePlayer2: 4 };
    // When
    const print = displayScore(score);
    //Then
    expect(print).toEqual(MESSAGE.PLAYER_2_WINS);
  });

  it("Should display 40 - 30", function () {
    // Given
    const score = { scorePlayer1: 3, scorePlayer2: 2 };
    // When
    const print = displayScore(score);
    //Then
    expect(print).toEqual("40 - 30");
  });

  it("Should display Player 1 wins", function () {
    // Given
    const score = { scorePlayer1: 4, scorePlayer2: 2 };
    // When
    const print = displayScore(score);
    //Then
    expect(print).toEqual(MESSAGE.PLAYER_1_WINS);
  });

  it("Should display Deuce", function () {
    // Given
    const score = { scorePlayer1: 3, scorePlayer2: 3 };
    // When
    const print = displayScore(score);
    //Then
    expect(print).toEqual(MESSAGE.DEUCE);
  });

  it("Should display Deuce", function () {
    // Given
    const score = { scorePlayer1: 4, scorePlayer2: 4 };
    // When
    const print = displayScore(score);
    //Then
    expect(print).toEqual(MESSAGE.DEUCE);
  });

  it("Should display advantage to player 1", function () {
    // Given
    const score = { scorePlayer1: 4, scorePlayer2: 3 };
    // When
    const print = displayScore(score);
    //Then
    expect(print).toEqual(MESSAGE.ADVANTAGE_PLAYER_1);
  });

  it("Should display advantage to player 2", function () {
    // Given
    const score = { scorePlayer1: 3, scorePlayer2: 4 };
    // When
    const print = displayScore(score);
    //Then
    expect(print).toEqual(MESSAGE.ADVANTAGE_PLAYER_2);
  });

  it("Should display player 1 wins", function () {
    // Given
    const score = { scorePlayer1: 5, scorePlayer2: 3 };
    // When
    const print = displayScore(score);
    // Then
    expect(print).toEqual(MESSAGE.PLAYER_1_WINS);
  });

  it("Should display player 2 wins", function () {
    // Given
    const score = { scorePlayer1: 3, scorePlayer2: 5 };
    // When
    const print = displayScore(score);
    // Then
    expect(print).toEqual(MESSAGE.PLAYER_2_WINS);
  });

  it("Should display Error", function () {
    // Given
    const score = { scorePlayer1: 3, scorePlayer2: 6 };
    // When
    const print = displayScore(score);
    // Then
    expect(print).toEqual(MESSAGE.ERROR);
  });

});

describe("Test of tennis()", function () {
  it("Should return {2, 2}", function () {
    //Given
    const score = { scorePlayer1: 1, scorePlayer2: 2 };
    // When
    const nextScore = tennis(score, WINNER.PLAYER_1);
    // Then
    expect(nextScore).toEqual({ scorePlayer1: 2, scorePlayer2: 2 });
  });

  it("Should return {1, 3}", function () {
    //Given
    const score = { scorePlayer1: 1, scorePlayer2: 2 };
    // When
    const nextScore = tennis(score, WINNER.PLAYER_2);
    // Then
    expect(nextScore).toEqual({ scorePlayer1: 1, scorePlayer2: 3 });
  });
});
