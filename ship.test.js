const Ship = require("./Ship");

test("Initialize Ship", () => {
  const ship = new Ship(5);
  expect(ship).toEqual({
    length: 5,
    hits: 0,
  });
});

test("Hit Ship", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship).toEqual({
    length: 3,
    hits: 2,
  });
});

test("is Sunk", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
