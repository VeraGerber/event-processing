import Board from './Board';
import logic_game from './logic_game';

const board = new Board(4);
board.showImage();
// eslint-disable-next-line no-unused-vars
const logic = new logic_game(board);