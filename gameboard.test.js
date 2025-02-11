const gameboard = require("./Gameboard");
const Ship = require("./Ship");

test("Initialize Board", () => {
  const temp = new gameboard();
  expect(temp).toEqual({
    board: [
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
      [
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
        "undefined",
      ],
    ],
  });
});

describe("Placement Tests", () => {
  const temp = new gameboard();
  test("Placing ship on wrong X coordinates", function () {
    const shipTemp = new Ship(5);
    expect(temp.placeShip(shipTemp, 9, 0, "X")).toBe(false);
  });
  test("Placing ship on wrong Y coordinates", function () {
    const shipTemp = new Ship(5);
    expect(temp.placeShip(shipTemp, 0, 9, "Y")).toBe(false);
  });
  test("Placing ship on correct X coordinates", function () {
    const shipTemp = new Ship(5);
    expect(temp.placeShip(shipTemp, 4, 0, "X")).toBe(true);
  });
  test("Placing ship on wrong Y coordinates", function () {
    const shipTemp = new Ship(5);
    expect(temp.placeShip(shipTemp, 0, 4, "Y")).toBe(true);
  });
});

test("Checking Coordinates are valid", () => {
  const temp = new gameboard();
  expect(temp.isCoordValid(9, 9)).toBe(true);
});
