import state from "../../../state/state";

export function onRangeSwitch(event) {
    if (event.key === 'r') {
        this.isRangeButton = !this.isRangeButton;
    }
}

export function onCellDown(event) {
    const position = +event.target.closest('li').dataset.position;

    this.timer = setTimeout(() => {
        const { isRangeButton, characters, teamPL, board } = this;
        const char = characters.getTeamChar(position);

        if (char) {
            highlightAttackRange(char, isRangeButton, board);
            highlightMoveRange(char, isRangeButton, board);
        }
        if (char.turn === 'PL') state.isCellHolded = true;

    }, 400);
}

export function onCellUp() {
    clearTimeout(this.timer);
    const { board } = this;

    if (state.underControl) {
        board.deselectAllCells();
        if (typeof state.activePos === 'number') {
            board.selectCell(state.activePos, 'yellow');
        }
    }
}



function highlightAttackRange(char, toggled, board) {
    if (toggled) {
        const attackRange = char.getAttackRange();
        const resultRange = exceptChars(attackRange, char);

        resultRange.forEach((position) => board.selectCell(position, 'red'));
    }
}

function highlightMoveRange(char, toggled, board) {
    if (!toggled) {
        const moveRange = char.getMoveRange();
        const resultRange = exceptChars(moveRange, char);

        resultRange.forEach((position) => board.selectCell(position, 'green'));
    }
}

function exceptChars(range, char) {
    return range.reduce((total, position) => {
        if (position !== char.position) {
            total.push(position);
        }
        return total;
    }, []);
}
