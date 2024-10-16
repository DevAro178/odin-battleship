export default class ship {
  constructor(len) {
    this.length = len;
    this.hits = 0;
    this.sunk = false;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    if (this.hits >= this.length) this.sunk = true;

    return this.sunk;
  }
}
