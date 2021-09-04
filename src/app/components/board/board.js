/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
import './board.css';
import boardT from "./board.tmp";
import characterT from '../character/character.tmp';
import engine from "../../lib/engine/engine";

export default class Board {
    constructor() {
        this.container = document.querySelector('.board-container');
    }

    renderBoard(theme, boardSize) {
        const html = engine(boardT(boardSize, theme));

        this.container.innerHTML = html;
        this.boardSize = boardSize;
        this.cells = this.container.querySelectorAll('.board__cell');
        this.boardEl = this.container.querySelector('.board');
    }

    renderChars(positionedChars) {
        for (const cell of this.cells) {
            cell.innerHTML = '';
        }

        for (const positionedChar of positionedChars) {
            const charHtml = engine(characterT(positionedChar));
            this.cells[positionedChar.position].insertAdjacentHTML('afterbegin', charHtml);
        }
    }

    setTheme(theme) {
        this.boardEl.className = `board ${theme}`;
    }

    clearListeners() {
        this.container.innerHTML = this.container.innerHTML;
    }

    setCursor(cursor) {
        this.boardEl.style.cursor = cursor;
    }

    selectCell(index, color) {
        this.cells[index].classList.add('selected', `selected-${color}`);
    }

    deselectCell(index) {
        const cell = this.cells[index];
        cell.classList.remove(...Array.from(cell.classList)
            .filter((o) => o.startsWith('selected')));
    }

    deselectAllCells() {
        for (let i = 0; i < this.boardSize ** 2; i += 1) {
            this.deselectCell(i);
        }
    }

    clearDataset(position) {
        const cell = this.cells[position];
        cell.title = '';
    }

    clearAllDataset() {
        for (let i = 0; i < this.boardSize ** 2; i += 1) {
            this.clearDataset(i);
            this.deselectCell(i);
        }
    }

    getMoveRange(position) {
        return getPositions.call(this, 'moveRange', position).positions;
    }

    getAttackRange(position) {
        return getPositions.call(this, 'attackRange', position).positions
    }
};
