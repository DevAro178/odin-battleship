class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill("undefined"));
    this.warBoard = Array.from({ length: 10 }, () =>
      Array(10).fill("undefined")
    );
    this.shipObjs = [];
    this.isAllShipsSunk = false;
  }
  recieveAttack(coordX, coordY) {
    if (this.isCoordValid(coordX, coordY)) {
      let res;
      if (this.board[coordY][coordX] != "undefined") {
        this.board[coordY][coordX].hit();
        this.warBoard[coordY][coordX] = "Hit";
        res = "Hit";
      } else {
        this.warBoard[coordY][coordX] = "Miss";
        res = "Miss";
      }
      this.isAllShipsSunk = this.computeIsShipSink();
      return res;
    } else return false;
  }
  computeIsShipSink() {
    let totalHitsAllowed = this.shipObjs.reduce((total, ship) => {
      return total + ship.length;
    }, 0);
    let totalHits = this.warBoard.reduce((prev, slotY) => {
      prev += slotY.reduce((prev, slotX) => {
        if (slotX === "Hit") prev += 1;
        return prev;
      }, 0);
      return prev;
    }, 0);

    if (totalHits >= totalHitsAllowed) return true;
    return false;
  }
  placeShip(shipObj, coordX, coordY, direction) {
    try {
      switch (direction) {
        case "X":
          if (this.checkHorizontalPlacement(shipObj, coordX, coordY)) {
            this.placeHorizontal(shipObj, coordX, coordY);
            this.shipObjs.push(shipObj);
            return true;
          } else return false;
          break;
        case "Y":
          if (this.checkVerticalPlacement(shipObj, coordX, coordY)) {
            this.placeVertical(shipObj, coordX, coordY);
            this.shipObjs.push(shipObj);
            return true;
          } else return false;
          break;
      }
    } catch (e) {
      return false;
    }
  }
  isCoordValid(coordX, coordY) {
    if (
      coordX > this.board.length - 1 ||
      coordY > this.board.length - 1 ||
      this.warBoard[coordY][coordX] != "undefined"
    )
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
