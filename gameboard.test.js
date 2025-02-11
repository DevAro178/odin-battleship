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

describe("Recieve Attacks Function", () => {
  const temp = new gameboard();
  const shipTemp = new Ship(5);
  temp.placeShip(shipTemp, 0, 2, "Y");
  test("Attacking a carrier it should hit", function () {
    expect(temp.recieveAttack(0, 4)).toBe("Hit");
  });
  test("Attacking a carrier it should miss", function () {
    expect(temp.recieveAttack(4, 4)).toBe("Miss");
  });
  test("Attacking a carrier it should do nothing as coordinates are incorrect", function () {
    expect(temp.recieveAttack(10, 4)).toBe(false);
  });
});
