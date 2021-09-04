import { onCellLeave, onCellEnter } from "./leaveEnterCell";
import { onCellUp, onCellDown, onRangeSwitch } from "./rangeSwitch";
import { onCellLeftClick } from "./leftClickCell";


export default function addBoardListeners() {
    document.addEventListener('keydown', (event) => onRangeSwitch.call(this, event));
    this.board.boardEl.addEventListener('mousedown', (event) => onCellDown.call(this, event));
    this.board.boardEl.addEventListener('mouseup', () => onCellUp.call(this));

    this.board.cells.forEach((cell, i) => {
        cell.addEventListener('mouseenter', () => onCellEnter.call(this, i));
        cell.addEventListener('mouseleave', () => onCellLeave.call(this, i));
    })

    this.board.boardEl.addEventListener('click', (event) => onCellLeftClick.call(this, event));
}
