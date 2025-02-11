class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill("undefined"));
  }
  recieveAttack(coordX, coordY) {
    if (this.isCoordValid(coordX, coordY)) {
      if (this.board[coordY][coordX] != "undefined") {
        this.board[coordY][coordX].hit();
        return "Hit";
      } else return "Miss";
    } else return false;
  }
  placeShip(shipObj, coordX, coordY, direction) {
    try {
      switch (direction) {
        case "X":
          if (this.checkHorizontalPlacement(shipObj, coordX, coordY)) {
            this.placeHorizontal(shipObj, coordX, coordY);
            return true;
          } else return false;
          break;
        case "Y":
          if (this.checkVerticalPlacement(shipObj, coordX, coordY)) {
            this.placeVertical(shipObj, coordX, coordY);
            return true;
          } else return false;
          break;
      }
    } catch (e) {
      return false;
    }
  }
  isCoordValid(coordX, coordY) {
    if (coordX > this.board.length - 1 || coordY > this.board.length - 1)
      return false;
    return true;
  }
  checkHorizontalPlacement(shipObj, coordX, coordY) {
    let valid = true;

    for (let i = coordX; i <= coordX + shipObj.length; i++) {
      if (!valid) break;
      try {
        if (this.board[coordY][i]) {
          this.board[coordY][i] != "undefined"
            ? (valid = false)
            : (valid = true);
          valid = this.isCoordValid(coordX, coordY) ? true : false;
        } else valid = false;
      } catch (e) {
        valid = false;
      }
    }

    return valid;
  }
  checkVerticalPlacement(shipObj, coordX, coordY) {
    let valid = true;

    for (let i = coordY; i <= coordY + shipObj.length; i++) {
      if (!valid) break;
      try {
        if (this.board[i][coordX]) {
          this.board[i][coordX] != "undefined"
            ? (valid = false)
            : (valid = true);
          valid = this.isCoordValid(coordX, coordY) ? true : false;
        } else valid = false;
      } catch (e) {
        valid = false;
      }
    }

    return valid;
  }
  placeHorizontal(shipObj, coordX, coordY) {
    for (let i = coordX; i <= coordX + shipObj.length; i++) {
      this.board[coordY][i] = shipObj;
    }
  }
  placeVertical(shipObj, coordX, coordY) {
    for (let i = coordY; i <= coordY + shipObj.length; i++) {
      this.board[i][coordX] = shipObj;
    }
  }
}
module.exports = Gameboard;
