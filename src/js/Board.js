export default class Board {
  constructor(size) {
    this.boardSize = size;
    this.cells = [];
    this.activeHole = 0;
    this.Board = document.querySelector('.board_game');
    this.createBoard();
  }

  createBoard() {
    for (let i = 1; i <= this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.className = `hole hole-${i}`;
      this.Board.append(cell);

      this.cells.push(cell);
    }
  }

  setNextCell() {
    const hole = document.querySelectorAll('.hole');
    const arrHole = Array.from(hole);

    arrHole[this.activeHole].classList.remove('hole_with-goblin');
    this.activeHole = Math.floor(Math.random() * arrHole.length);
    arrHole[this.activeHole].classList.add('hole_with-goblin');
  }

  showImage() {
    // setInterval(() => this.setNextCell(), 1000);
    this.setNextCell();
  }
}