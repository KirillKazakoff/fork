import state from "../../../state/state";

export function onCellLeave(position) {
    const cell = this.board.cells[position];

    if (cell.className.includes('green') || cell.className.includes('red')) {
        this.board.deselectCell(position);
    }
    if (state.isCellHolded) {
        onCellUp(this.board);
    }
}

function onCellUp(board) {
    if (state.underControl) {
        board.deselectAllCells();
        if (typeof state.activePos === 'number') {
            board.selectCell(state.activePos, 'yellow');
        }
    }
}

export function onCellEnter(nextPos) {
    const { activePos } = state;
    const { characters, board } = this;

    const char = characters.getTeamChar(nextPos);
    const activeChar = characters.getTeamChar(activePos);

    board.setCursor('pointer');

    if (!char && typeof activePos === 'number') {
        const positions = activeChar.getMoveRange();

        if (positions.some((position) => position === nextPos)) {
            board.selectCell(nextPos, 'green');
        }
    }

    if (char.turn === 'AI' && typeof activePos === 'number') {
        const positions = activeChar.getAttackRange();

        if (positions.some((position) => position === nextPos)) {
            board.setCursor('crosshair');
            board.selectCell(nextPos, 'red');
            return;
        }
        board.setCursor('not-allowed');
    }

    if (char.turn === 'AI' && typeof activePos !== 'number') {
        board.setCursor('not-allowed');
    }
}


