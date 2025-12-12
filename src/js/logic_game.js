import GameBoard from './GameBoard';

export default class logic_game extends Board {
  constructor(board) {
    super();
    this.board = board;
    this.eventClick();
    this.dead = 0;
    this.lost = 0;
    this.clickOrNo = true;
  }

  scoring(score) {
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    if (score) {
      this.dead += 1;
      dead.textContent = this.dead;
    } else {
      this.lost += 1;
      lost.textContent = this.lost;
      if (this.lost === 5) {
        // eslint-disable-next-line no-alert
        alert(`GAME OVER!!! Your account ${this.dead}`);
        lost.textContent = 0;
        dead.textContent = 0;
        this.lost = 0;
        this.dead = 0;
      }
    }
    this.board.setNextCell();
  }

  eventClick() {
    setInterval(() => {
      if (this.clickOrNo) {
        this.clickOrNo = false;
      } else {
        this.scoring(false);
      }
    }, 1000);

    this.board.cells.forEach((element) => {
      element.addEventListener('click', () => {
        this.clickOrNo = true;
        if (element.classList.contains('hole_with-goblin')) {
          this.scoring(true);
          this.board.setNextCell();
        } else {
          this.scoring(false);
        }
      });
    });
  }
}