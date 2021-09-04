import state from "../../state/state";

export function getCell(position) {
    return document.querySelector(`[data-position="${position}"]`);
}

export default function getPositions(cellAmount, start) {
    const { boardSize } = state;
    const positions = new Set();
    const toRight = [];
    const toLeft = [];
    const toTop = [];
    const toBottom = [];
    const toMainDb = [];
    const toMainDt = [];
    const toAuxDb = [];
    const toAuxDt = [];

    const calcToRight = () => {
        for (let i = 0; i < cellAmount + 1; i += 1) {
            const calcExp = start + i;
            // const cell = this.cells[calcExp];
            const cell = getCell(calcExp);


            positions.add(calcExp);
            toRight.push(calcExp);
            if (cell.className.includes('right')) {
                return;
            }
        }
    };

    const calcToLeft = () => {
        for (let i = 0; i < cellAmount + 1; i += 1) {
            const calcExp = start - i;
            // const cell = this.cells[calcExp];
            const cell = getCell(calcExp);

            positions.add(calcExp);
            toLeft.push(calcExp);
            if (cell.className.includes('left')) {
                return;
            }
        }
    };

    const calcToTop = () => {
        for (let i = 0; i < cellAmount + 1; i += 1) {
            const calcExp = start - i * boardSize;
            // const cell = this.cells[calcExp];
            const cell = getCell(calcExp);

            positions.add(calcExp);
            toTop.push(calcExp);
            if (cell.className.includes('top')) {
                return;
            }
        }
    };

    const calcToBottom = () => {
        for (let i = 0; i < cellAmount + 1; i += 1) {
            const calcExp = start + i * boardSize;
            // const cell = this.cells[calcExp];
            const cell = getCell(calcExp);

            positions.add(calcExp);
            toBottom.push(calcExp);
            if (cell.className.includes('bottom')) {
                return;
            }
        }
    };

    const calcToMainDiagTop = () => {
        // if (this.cells[start].className.includes('right')) {
        //     return;
        // }
        if (getCell(start).className.includes('right')) {
            return;
        }

        for (let i = 1; i < cellAmount + 1; i += 1) {
            const calcExp = start - i * (boardSize - 1);
            if (calcExp < 0) {
                return;
            }

            // const cell = this.cells[calcExp];
            const cell = getCell(calcExp);
            positions.add(calcExp);
            toMainDt.push(calcExp);
            if (!cell.className.includes('center')) {
                return;
            }
        }
    };

    const calcToMainDiagBottom = () => {
        // if (this.cells[start].className.includes('left')) {
        //     return;
        // }
        if (getCell(start).className.includes('left')) {
            return;
        }

        for (let i = 1; i < cellAmount + 1; i += 1) {
            const calcExp = start + i * (boardSize - 1);
            if (calcExp >= boardSize ** 2) {
                return;
            }

            // const cell = this.cells[calcExp];
            const cell = getCell(calcExp);
            positions.add(calcExp);
            toMainDb.push(calcExp);
            if (!cell.className.includes('center')) {
                return;
            }
        }
    };

    const calcToAuxDiagTop = () => {
        // if (this.cells[start].className.includes('left')) {
        //     return;
        // }
        if (getCell(start).className.includes('left')) {
            return;
        }

        for (let i = 1; i < cellAmount + 1; i += 1) {
            const calcExp = start - i * (boardSize + 1);
            if (calcExp < 0) {
                return;
            }

            // const cell = this.cells[calcExp];
            const cell = getCell(calcExp);
            positions.add(calcExp);
            toAuxDt.push(calcExp);
            if (!cell.className.includes('center')) {
                return;
            }
        }
    };

    const calcToAuxDiagBottom = () => {
        // if (this.cells[start].className.includes('right')) {
        //     return;
        // }
        if (getCell(start).className.includes('right')) {
            return;
        }

        for (let i = 1; i < cellAmount + 1; i += 1) {
            const calcExp = start + i * (boardSize + 1);
            if (calcExp >= boardSize ** 2) {
                return;
            }

            // const cell = this.cells[calcExp];
            const cell = getCell(calcExp);
            positions.add(calcExp);
            toAuxDb.push(calcExp);
            if (!cell.className.includes('center')) {
                return;
            }
        }
    };

    calcToRight();
    calcToLeft();
    calcToTop();
    calcToBottom();
    calcToMainDiagTop();
    calcToMainDiagBottom();
    calcToAuxDiagTop();
    calcToAuxDiagBottom();

    return {
        positions: [...positions],
        toRight,
        toLeft,
        toBottom,
        toTop,
        toMainDb,
        toMainDt,
        toAuxDb,
        toAuxDt,
    };
}