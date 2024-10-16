import GameBoard from "./gameboard.js";

export default class player {
  constructor() {
    this.name = "";
    this.gameBoard = new GameBoard();
    this.gameBoard.placeShip("Destroyer", 0, 0, 0, 2);
  }
}
