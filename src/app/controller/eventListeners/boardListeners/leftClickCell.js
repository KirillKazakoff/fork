import state from "../../../state/state";

export function onCellLeftClick(event) {
    let position;
    try {
        position = +event.target.closest('li').dataset.position;
    } catch (error) {
        return;
    }

    let { activePos, underControl } = state;
    const { characters, board, interfaceAI, interfacePL } = this;

    const char = characters.getTeamChar(position);
    const activeChar = characters.getTeamChar(activePos);

    const onEmptyCellClick = (cellPos) => {
        const positions = activeChar.getMoveRange();

        if (positions.some((position) => position === cellPos)) {
            activeChar.moveTo(cellPos);
            board.clearDataset(activePos);

            board.renderChars(characters.heroes);

            board.deselectCell(cellPos);
            board.selectCell(cellPos, 'yellow');
            board.deselectCell(activePos);

            state.activePos = cellPos;
            this.turnAI();
        }
        return;
    }

    const onEnemyKill = (killed) => {
        board.clearDataset(char.position);
        board.deselectCell(char.position);
        this.teamAI.deleteChar(killed);
        this.updateCharacters();
    }

    const onEnemyClick = async (char) => {
        const positions = activeChar.getAttackRange();

        if (positions.some((position) => position === char.position) && underControl) {
            state.underControl = false;
            const { skillActive } = activeChar;

            const promise = new Promise(async (resolve) => {
                if (skillActive) {
                    const killed = await activeChar[skillActive](char);
                    if (killed[0]) onEnemyKill();
                } else {
                    const killed = await activeChar.fight(char);
                    if (killed) onEnemyKill(killed);
                }
                resolve();
            })

            promise.then(() => {
                board.renderChars(characters.heroes)
                interfaceAI.update();
                this.turnAI();
            })
        }
    }

    const onPlayerCharClick = (char) => {
        if (char.turn === 'AI') {
            interfaceAI.renderInterface(char);
            return;
        }

        board.selectCell(position, 'yellow');
        if (typeof activePos === 'number') {
            board.deselectCell(activePos);
        }
        if (activePos === position) {
            activePos = null;
            interfacePL.renderGeneric();
        } else {
            activePos = position;
            interfacePL.renderInterface(char);
        }

        if (state.isCellHolded) {
            interfacePL.renderInterface(char);
            board.selectCell(position, 'yellow');
            activePos = position;
            state.isCellHolded = false;
        }

        state.activePos = activePos;
    }


    if (!char && typeof activePos === 'number' && underControl) {
        onEmptyCellClick(position);
    }

    if (char.turn === 'AI' && typeof activePos === 'number') {
        onEnemyClick(char);
    }

    if (char) {
        onPlayerCharClick(char);
    }
}