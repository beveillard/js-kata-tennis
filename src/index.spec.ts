import { tennis, displayScore, displayBasicScore } from ".";

describe("Test of displayBasicScore()", function () {

  it("Should display 15 - 30", function () {
    expect(displayBasicScore([1, 2])).toEqual("15 - 30");
  });

});

describe("Test of displayScore()", function () {

  it("Should display 15 - 40", function () {
    expect(displayScore([1, 3])).toEqual("15 - 40");
  });

  it("Should display 40 - 30", function () {
    expect(displayScore([3, 2])).toEqual("40 - 30");
  });

  it("Should display Deuce", function () {
    expect(displayScore([3, 3])).toEqual("Deuce");
  });

  it("Should display Deuce", function () {
    expect(displayScore([4, 4])).toEqual("Deuce");
  });

  it("Should give advantage to player 1", function () {
    expect(displayScore([4, 3])).toEqual("Advantage player 1");
  });

  it("Should give advantage to player 2", function () {
    expect(displayScore([3, 4])).toEqual("Advantage player 2");
  });

  it("Should give player 1 winner", function () {
    expect(displayScore([5, 3])).toEqual("Player 1 wins the game");
  });

  it("Should give player 2 winner", function () {
    expect(displayScore([3, 5])).toEqual("Player 2 wins the game");
  });

});

describe("Test of tennis()", function () {
  it("Should display 15 - 40", function () {
    expect(tennis([1, 2], 1)).toEqual([[1, 3], "15 - 40"]);
  });
});
