import { tennis, extractPoints1, extractPoints2, incrementPoints } from ".";

describe("Test of tennis()", function () {

  it("Should return 15", function () {
    expect(extractPoints1("15 - 30")).toEqual("15");
  });

  it("Should return 30", function () {
    expect(extractPoints2("15 - 30")).toEqual("30");
  });

  it("Should return 40", function () {
    expect(incrementPoints("30")).toEqual("40");
  });

  it("Should return +", function () {
    expect(incrementPoints("40")).toEqual("+");
  });

  it("Should return *", function () {
    expect(incrementPoints("+")).toEqual("*");
  });

  it("Should return '15 - 0'", function () {
    expect(tennis("0 - 0", 1)).toEqual("15 - 0");
  });

  it("Should return '0 - 15'", function () {
    expect(tennis("0 - 0", 2)).toEqual("0 - 15");
  });

  it("Should return '40 - 30'", function () {
    expect(tennis("30 - 30", 1)).toEqual("40 - 30");
  });

  it("Should return '30 - 40'", function () {
    expect(tennis("30 - 30", 2)).toEqual("30 - 40");
  });

  it("Should return 'Deuce'", function () {
    expect(tennis("30 - 40", 1)).toEqual("Deuce");
  });

  it("Should return 'Deuce'", function () {
    expect(tennis("40 - 30", 2)).toEqual("Deuce");
  });

  it("Should return 'Deuce'", function () {
    expect(tennis("Advantage player 1", 2)).toEqual("Deuce");
  });

  it("Should return 'Deuce'", function () {
    expect(tennis("Advantage player 2", 1)).toEqual("Deuce");
  });

  it("Should return 'Advantage player 1'", function () {
    expect(tennis("Deuce", 1)).toEqual("Advantage player 1");
  });

  it("Should return 'Advantage player 2'", function () {
    expect(tennis("Deuce", 2)).toEqual("Advantage player 2");
  });

  it("Should return 'Player 1 wins the game'", function () {
    expect(tennis("40 - 30", 1)).toEqual("Player 1 wins the game");
  });

  it("Should return 'Player 1 wins the game'", function () {
    expect(tennis("Advantage player 1", 1)).toEqual("Player 1 wins the game");
  });

  it("Should return 'Player 2 wins the game'", function () {
    expect(tennis("30 - 40", 2)).toEqual("Player 2 wins the game");
  });

  it("Should return 'Player 2 wins the game'", function () {
    expect(tennis("Advantage player 2", 2)).toEqual("Player 2 wins the game");
  });

  it("Should return '*'", function () {
    expect(tennis("Advantage player 2", 3)).toEqual("*");
  });

});
