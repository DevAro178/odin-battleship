import SHIP from "./ship.js";

export default class gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10));
  }
  placeShip(type, colStart, colEnd, rowStart, rowEnd) {
    var length = 0;
    switch (type) {
      case "Carrier":
        length = 5;
        break;
      case "Battleship":
        length = 4;
        break;
      case "Destroyer":
        length = 3;
        break;
      case "Submarine":
        length = 3;
        break;
      default:
        length = 2;
        break;
    }
    var ship = new SHIP(length);
    this.board[rowStart][colStart] = ship;
    console.log(this.board);
  }
}
